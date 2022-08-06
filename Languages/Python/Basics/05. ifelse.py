"""
Program for checking the temperature of a
nuclear power station core
"""

max_temp = 40;
min_temp = 10;
current_temp = 9;

if current_temp > max_temp:
    print('Core temperature above the safe levels. Everyone panic!!!');
elif current_temp < min_temp:
    print('Temperature levels low. Please make a fire.');
else:
    print('Everything is fine.');
