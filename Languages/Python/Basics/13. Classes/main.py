class Animals:
    def __init__(self, name, noise, color):
        self.name = name;
        self.noise = noise;
        self.color = color;

    def describe(self):
        print('The {} is {} and makes the noise: {}'.format(self.name, self.color, self.noise));


tiger = Animals('tiger', 'Rwaaarw', 'Orange and black');
dolfin = Animals('dolfin', 'Reeeeeee', 'Grey');

tiger.describe();

class House:
    def __init__(self, SqM, numberOfRooms, marketValue, backGarden):
        self.SqM = SqM;
        self.numberOfRooms = numberOfRooms;
        self.marketValue = marketValue;
        self.backGarden = backGarden;

house_1024 = House(120, 4, 120000, True);
house_3000 = House(300, 8, 1000000, True);
house_1234 = House(80, 2, 78000, False);

print(house_1024.SqM);
print(house_3000.numberOfRooms);
print(house_1234.marketValue);
