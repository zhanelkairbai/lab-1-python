import math

a = float(input("Введите первый катет: "))
b = float(input("Введите второй катет: "))

c = math.sqrt(a ** 2 + b ** 2)

area = (a * b) / 2
perimeter = a + b + c

angle_a = math.degrees(math.atan(a / b))
angle_b = 90 - angle_a

print("Гипотенуза:", c)
print("Площадь:", area)
print("Периметр:", perimeter)
print("Первый острый угол:", angle_a)
print("Второй острый угол:", angle_b)
