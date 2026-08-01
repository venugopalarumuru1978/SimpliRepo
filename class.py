# ##Bluprint to object

class light:
    def __init__(self, blue, yellow, red):
        print("constructor called")
        self.Blue = blue
        self.Red = red
        self.Yellow = yellow

    def glow(self, led3):
        print(f"Glowing white Blue")

led = light("led1", "led2","led3")
print(led.Blue)

##### Parent Class ####

# class Animal:

#     def sound(self):
#         print("Animal Sound")

# class Dog(Animal):
    
#     def bark(self):
#         print("Dog Barking")
    

# A = Dog()
# A.bark()
# A.sound()


# ######### POLYMORPHISM ##########
# class Cat:
#     def sound(self):
#         return "mainaau"

# class Dog:
#     def sound(self):
#         return "bhaubhau"

# animal = [Cat(), Dog()]

# result = animal[0].sound()
# print(result)


#########  ENCAPSULATION   ##########

# class Bank:

#     def __init__(self):
#         self.__balance = 1000

#     def get_balance(self): # with getter we can hide the varibale form gloabla 

#         return self.__balance
    
# account = Bank()
# print(account.get_balance())

# ##### Abstraction  #########
# from abc import ABC, abstractmethod
# class BankApp(ABC):  # this class must have abstact method

#     def database(self):
#         print('conected to dataase')

#     @abstractmethod
#     def security(self):
#         pass

# class MobileApp(BankApp):
    
#     def mobile_login(self):
#         print('login sucessfull form mobile')

#     def security(self):
#         print('mobile security')

# mob = MobileApp()
# mob.mobile_login()

print("all is done")

