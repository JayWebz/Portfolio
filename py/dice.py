from random import randrange

class Dice:
	def __init__(self):
		self.dice = [0] * 5
		self.rollAll()

	def roll(self, which):
		for pos in which: 
			self.dice[pos] = randrange(1, 7)

	def rollAll(self):
		self.roll(range(5))

	def values(self):
		return self.dice[:]

	def score(self):
		# Create the counts list
		counts = [0] * 7
		for value in self.dice:
			counts[value] = counts[value] + 1

		# Score the hand
		if 5 in counts:
			return "Five of Kind", 30
		elif 4 in counts:
			return "Four of Kind", 15
		elif (3 in counts) and (2 in counts):
			return "Full House", 12
		elif 3 in counts:
			return "Three of Kind", 8
		elif not (2 in counts) and (counts[1]==0 or counts[6]==0):
			return "Straight", 20
		elif counts.count(2) == 2:
			return "Two Pair", 5
		else:
			return "Garbage", 0