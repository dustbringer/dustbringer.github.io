---
slug: "/notes/monoid-results"
title: "Monoid Results"
description: Some interesting results in monoids.
author: dustbringer
edited: 2023-09-04
tags:
    - algebra
    - monoid
---

# Monoid Results

Recall that a monoid $M$ is a set equipped with an associative binary operation $* : M \times M \to M$ and an identity element $e \in M$ such that for any $m \in M$, $e*m = m = m*e$. We sometimes omit $*$ and concatenate the symbols.

## Inverses
A *left (resp. right) inverse* of $m \in M$ is an element $n \in M$ such that $nm = e$ (resp. $mn = e$).

**Proposition.** (Equality of left and right inverses)
If both left and right inverses exist for an element, then they are equal. That is if $am = e$ and $mb = e$ then $a = b$.

**Proof.**
Let $m \in M$ and $a,b \in M$ such that $am = e = mb$. Then we have $a = ae = a(mb) = (am)b = eb = b$.

**Corollary.**
In the context of monoids:
- If left and right inverses of an element exist, then it is a two sided inverse and is unique.
- If an element has two distinct left (resp. right) inverses, it cannot have a right (resp. left) inverse.

