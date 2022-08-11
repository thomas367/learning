import pandas as pd;
import os;

scriptDir = os.path.dirname(__file__); # absolute dir the script is in
absFilePath = os.path.join(scriptDir, '../datasets/train.csv'); # get absolute file path
data = pd.read_csv(absFilePath);

print(data.shape);
print(data.size);
print(data.describe());
