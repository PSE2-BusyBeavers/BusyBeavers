

from math import ceil, floor
from numbers import Number
from typing import List
from webbrowser import get


def get_median(numbers: List[Number]) -> float:
    is_odd = len(numbers) % 2 == 1
    numbers.sort()
    if(is_odd):
        index = ceil(len(numbers)/2) - 1
        return numbers[index]
    index = floor(len(numbers)/2) - 1  # just for security
    return (numbers[index]+numbers[index+1])/2


def get_quartils(numbers: List[Number]) -> List[float]:
    median = get_median(numbers)
    q1_numbers = []
    q3_numbers = []
    for number in numbers:
        if(number < median):
            q1_numbers.append(number)
        elif (number > median):
            q3_numbers.append(number)
    return [get_median(q1_numbers), get_median(q3_numbers)]


def get_whiskers(numbers: List[Number]) -> List[float]:
    q1, q3 = get_quartils(numbers)
    iqr = q3-q1
    lower_whisker = q1 - (1.5 * iqr)
    higher_whisker = q3 + (1.5*iqr)
    return [lower_whisker, higher_whisker]


def get_outliers_by_indicies(numbers: List[Number]) -> List[List[int]]:
    if(len(numbers) < 3):
        return [[], []]
    values = numbers.copy()
    lower_whisker, higher_whisker = get_whiskers(values)
    too_low = []
    too_high = []
    for i in range(len(numbers)):
        if(numbers[i] > higher_whisker):
            too_high.append(i)
        if(numbers[i] < lower_whisker):
            too_low.append(i)
    return [too_low, too_high]
