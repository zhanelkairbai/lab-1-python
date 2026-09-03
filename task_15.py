import math

x1 = float(input("Введите x1: "))
y1 = float(input("Введите y1: "))

x2 = float(input("Введите x2: "))
y2 = float(input("Введите y2: "))

distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

middle_x = (x1 + x2) / 2
middle_y = (y1 + y2) / 2

print("Расстояние между точками:", distance)
print("Координаты середины отрезка:", middle_x, middle_y)
