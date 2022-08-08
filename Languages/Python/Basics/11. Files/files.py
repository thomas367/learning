"""
- open(filename, mode)
- primary modes: r, w
- .write
- .read(), .readline()
- .close
- .txt files
"""
import os;

scriptDir = os.path.dirname(__file__) # absolute dir the script is in
absFilePath = os.path.join(scriptDir, 'story.txt');

handler = open(absFilePath, 'r');
content = handler.read();
handler.close();
print('\t', content);

#-------------------------------------------------------------------

handler = open(absFilePath, 'w');
userinput = input('Enter your text: ');
handler.write(userinput);
handler.close();

handler = open(absFilePath, 'r');
content = handler.read();
handler.close();
print("\t", content);
