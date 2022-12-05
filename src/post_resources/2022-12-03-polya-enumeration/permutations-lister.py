from itertools import permutations

# Remove duplicates from list of lists of letters
def removeDupes(l):
    # Use dictionary to remove duplicates, key is string joined from element of l
    l_dict = {''.join(x): x for x in l}
    return list(l_dict.values())

################ Basic Permutations ##################
# Returns list of unique permutations of letters
def getPerms(base):
    return removeDupes(list(permutations(base)))

############## Circular Permutations #################
# Rotates elements of l to the right by n positions
# From https://stackoverflow.com/questions/9457832/python-list-rotation
def rotate(l, n):
    return l[-n:] + l[:-n]

# List of all rotations of l
def allRotations(l):
    return removeDupes([rotate(l, n) for n in range(len(l))])

def getCirclarPerms(base):
    cperms = []
    perms_dict = {''.join(x): x for x in list(permutations(base))}
    while(perms_dict):
        # Loop while not empty
        p = next(iter(perms_dict.values()))
        cperms.append(p)
        p_keys = [''.join(rot) for rot in allRotations(p)]
        for key in p_keys:
            perms_dict.pop(key)
    return cperms

###################### Test ##########################

example = ['X', 'X', 'Y', 'Y', 'Z', 'Z']
# perms = getPerms(example)
perms = getCirclarPerms(example)

for p in perms:
    print(p)

print("Count: ", len(perms))
