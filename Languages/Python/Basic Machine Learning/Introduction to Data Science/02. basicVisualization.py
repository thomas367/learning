import pandas as pd;
import seaborn as sns;
import matplotlib.pyplot as plt;
import os;

scriptDir = os.path.dirname(__file__);
absFilePath = os.path.join(scriptDir, '../datasets/train.csv');
data = pd.read_csv(absFilePath);

print(pd.crosstab(data['Age'], data['Survived']));
print('----------------------------------------------------------');

ax = sns.countplot(x = 'Sex', hue = 'Survived', palette = 'Set1', data = data);
ax.set(title = 'Survivors according to sex', xlabel = 'Sex', ylabel = 'Total');
plt.show();

sns.factorplot(x = 'Pclass', y = 'Survived', hue = 'Sex', data = data, aspect = 0.9, size = 3.5);
