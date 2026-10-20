"""Optional asset maintenance: python subset-font.py /path/to/official/PretendardVariable.woff2.
Requires fonttools and brotli. Run when Korean UI or catalogue copy changes.
The renamed subset respects the OFL reserved family name; license accompanies it.
"""
from pathlib import Path
import sys
from fontTools import subset
from fontTools.ttLib import TTFont
root=Path(__file__).resolve().parents[1]
text=''.join(p.read_text() for p in (root/'src').rglob('*') if p.suffix in ['.js','.jsx'])
text+=''.join(chr(i) for i in range(32,127))
font=TTFont(sys.argv[1])
options=subset.Options()
options.flavor='woff2'
options.name_IDs=['*']
subsetter=subset.Subsetter(options=options)
subsetter.populate(text=text)
subsetter.subset(font)
for record in font['name'].names:
 if record.nameID in (1,3,4,6,16):
  record.string=('NagneWeb' if record.nameID!=6 else 'NagneWeb-Regular').encode(record.getEncoding())
font.flavor='woff2'
output=root/'public/fonts/NagneWeb.woff2'
font.save(output)
print(f'{len(set(text))} characters, {output.stat().st_size:,} bytes')
