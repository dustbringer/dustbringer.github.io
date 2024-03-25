---
slug: "/notes/2024-03-01-lie-group-examples"
title: Lie Group Examples
description: Examples of Lie groups
author: dustbringer
date: 2024-03-01
# edited: 2024-03-01
tags:
    - group theory
    - lie theory
---

# Lie Group Examples

## Useful results

**Proposition 1.** Open subsets of (smooth) manifolds are (smooth) manifolds with subset topology.

**Proof**:
- Let $U \subseteq M$ be open. Then, by definition, for any chart $\phi_x: U_x \to \R^n$ with $x \in U$, $\phi_x(U \cap U_x)$ is open in $\R^n$. Since $\phi_x$ is a diffeomorphism onto $\phi_x(U)$, the restriction $\phi_x|_{U \cap U_x}$ is a diffeomoprhism onto it's image $\phi_x|_{U \cap U_x}(U \cap U_x)$. Note that $U \cap U_x$ is a precisely the definition of an open neighbourhood of $x$ in $U$ (with subset topology from $\R^n$).
- Particularly, if $(U_x, \phi_x)$ is a chart for $M$, then $(U \cap U_x, \phi_x|_{U \cap U_x})$ is a chart for an open set $U \subseteq M$. Since (topological) subspaces preserve Hausdorff and second countability, $U$ is a manifold. Specifically, an embedded smooth submanifold of $M$.
- Note: if we replaced "diffeomorphism" with "homeomorphism", the same proof gives the result for general (not-necessarily-smooth) manifolds.


## $GL(n, \R)$

**Real Lie group**

The set $M_n(\R)$ of $n \times n$ matrices forms a manifold, by identifying it with $\R^{n^2}$ with the usual Euclidean topology and trivial charts. Note that this is not a usual matrix group because $M_n(\R)$ contains non-invertible matrices.

The subset $GL(n,\R)$ ("general linear group") of *invertible matrices* is a group with matrix multiplication and inverse. To show that it is a smooth manifold, consider the map $\op{det}: M_n(\R) \to \R$, sending a matrix to it's determinant. This is a polynomial in the entries of the input, so it is a smooth map. Then the preimage $GL(n,\R) := \op{det}^{-1}(\R \setminus 0)$ of the open set $\R \setminus 0 \subseteq \R$ is open, and so is a manifold by (Prop 1).

For $GL(n,\R)$ to be a Lie group, it is left to show that the group multiplication and inverse are smooth maps. Multiplication is smooth because it is a matrix of polynomials in the components of the input. The inverse of a matrix $M$ is $M^{-1} = \frac{1}{\op{det}(M)} \op{adj}(M)$ where $\op{adj}(M)$ is the adjugate matrix. The adjugate matrix is matrix of polynomials in the input components, and $1/\op{det}(M)$ is a smooth function because $\op{det}(M)$ is smooth and non-zero on $GL(n,\R)$. Hence the inverse operation is also smooth. This implies that $GL(n,\R)$ is indeed a Lie group.

**Compactness**

Since this is an embedded submanifold of $M_n(\R) \simeq R^{n^2}$, the Heine-Borel theorem says that compactness is equivalent to the statement that the topological space is *closed* and *bounded* in the usual norm. This applies to all the other matrix Lie groups we look at.

$GL(n,\R)$ is not compact.
- Consider the sequence of matrices $\{\lambda I\}_{\lambda > 0}$ where $I$ is the $n \times n$ identity matrix.
- It is clear that $\op{det}(\lambda I) = \lambda^n > 0$, but its Eucildean norm is clearly unbounded. So this sequence in $GL(n,\R)$ is also unbounded.

## $GL(n,\C)$

**Complex Lie group**

Similar to the real case.

Note that this is also a real Lie group, by identifying $\C = \R^2$; this forgets some information in $\C$.

**Compactness**

Similar to the real case, this is non-compact.

## $B(n,\R)$

A subgroup of $GL(n,\R)$, consisting of *invertible upper triangular matrices*. Alternatively, this consists of linear maps that perserve the flag
$$
0 = V_0 \subset V_1 \subset \dots \subset V_n = \R^n
$$
where $V_i = \angl{e_1,...,e_i}$ with $e_1,...,e_n$ are the standard basis vectors of $\R^n$, that is a map $M$ such that $\angl{Me_1, ..., Me_i} = V_i$. It is clear that invertible upper trianglular matrices are exactly these, where $Me_1, ..., Me_i$ (the columns of $M$) span $V_i$.

**Real Lie group**

Let $UT_n$ be the set of upper triangular matrices over $\R$. This is trivially a manifold by identifying it with $\R^{n(n+1)/2}$. Again, by considering the determinant map $\op{det}: UT_n(\R) \to \R$, we see that $B(n,\R) = \op{det}^{-1}(0) \subseteq UT_n$ is open in $UT_n$. Hence $B(n,\R)$ is a real manifold by (Prop 1). Similarly (or by extending the result from $GL(n,\R)$), the group structure is smooth with respect to this manifold structure, so $B(n,\R)$ is a real Lie group.

*Alternative.* There is a theorem by Cartan (Closed Subgroup Theorem): Closed subgroups of a Lie group is an embedded manidold with smooth maps. We can see that $B(n,\R) \subseteq GL(n,\R)$ is clearly a subgroup and is closed because $UT_n \subseteq M_n$ is closed (it is a hyperplane in $\R^n$), and so $B(n,\R) = GL(n,\R) \cap UT_n$ is closed in $GL(n,\R)$. This theorem can be used to prove the other Lie groups as well, but isn't direct enough to satisfy me.

Another argument for this being closed is the following. Consider the projection onto the "lower triangle", $f: GL(n,\R) \to \R^{n(n-1)/2}$ that maps matrices $(a_{ij})_{i,j}$ to the matrix with just the lower triangle entries $(a_{ij}, i > j)$ (and others are zero). This is a projection map so it is continuous. We have that $f^{-1}(\{0\}) = B(n,\R)$, which is closed as $\{0\}$ is closed in $\R$.

**Compactness**
$B(n,\R)$ is not compact. The same unbounded sequence we used for $GL(n,\R)$ is also in $B(n,\R)$.


## $B(n,\C)$

**Complex Lie group**

Similar to the real case.

**Compactness**

Similar to the real case, this is non-compact.

## $SL(n,\R)$

A subgroup of $GL(n,\R)$, consisting of *matrices with determinant 1*. That is, volume and orientation preserving linear maps. It is also a normal subgroup of $GL(n,\R)$ since for $A \in SL(n,\R)$ and $M \in GL(n,\R)$ we have $MAM^{-1} \in SL(n,\R)$, as $\op{det}(MAM^{-1}) = \op{det}(M) \op{det}(A) \op{det}(M)^{-1} = \op{det}(A) = 1$.

**Real Lie Group**















[^1]: Lee, John M., [*Introduction to Smooth Manifolds*](https://doi.org/10.1007/978-1-4419-9982-5) (2012)













