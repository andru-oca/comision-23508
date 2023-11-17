# Herencia de clase Abstracta
from abc import ABC, abstractclassmethod


class Futbolista(ABC):
    @abstractclassmethod
    def get_nombre(self):
        ...

    @abstractclassmethod
    def get_nacionalidad(self):
        pass
