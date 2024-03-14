---
slug: "/notes/2024-03-14-tensor-hom-for-modules"
title: Tensor-Hom adjunctions for modules
description: Explicit proof of some tensor-hom adjunctions for modules
author: dustbringer
date: 2024-03-14
# edited: 2024-03-14
tags:
    - representation theory
    - category theory
---

# Tensor-Hom Adjunctions for Modules

To make the module structures explicit, we may write $_A M_B$ for an $(A,B)$-bimodule $M$. Also we write $\Hom_{R_\ell}(-,-)$ for morphisms of *left* $R$-modules, and $\Hom_{R_r}(-,-)$ for morphisms of *right* $R$-modules.

## $\Hom$ as a (bi)module

Let $A,B,C$ be rings. Then let
- $M$ be an $(A,B)$-bimodule,
- $N$ be a $(B,C)$-bimodule,
- and $K$ be an $(A,C)$-bimodule.

### $_B \Hom_{A_\ell}(_A M_B,_A K_C) _C$

The additive group $\Hom_{A_\ell}(_A M_B,_A K_C)$ can be endowed with the structure of a $(B,C)$-bimodule. That is, for some left $A$-module homomorphism $f: M \to K$, define
- the left $B$-action to be $(b \cdot f)(m) = f(m \cdot b)$
- and the right $C$-action to be $(f \cdot c)(m) = f(m) \cdot c$.

The left action is well-defined because $(b \cdot f)(a \cdot m) = f(a \cdot m \cdot b) = a \cdot f(m \cdot b) = a \cdot (b \cdot f)(m)$, so $b \cdot f$ is a left $A$-module homomorphism. Furthermore it forms a module because
$$
(b_1 b_2 \cdot f)(m) = f(m \cdot b_1 \cdot b_2) = (b_2 \cdot f)(m \cdot b_1) = (b_1 \cdot (b_2 \cdot f))(m),
$$
where the other properties follow trivially.

The right action is well-defined because $(f \cdot c)(a \cdot m) = f(a \cdot m) \cdot c = a \cdot f(m) \cdot c = a \cdot (f \cdot c)(m)$, so $f \cdot a$ is a left $A$-module homomorphism. It also forms a module since
$$
(f \cdot c_1 c_2)(m) = f(m) \cdot c_1 \cdot c_2 = (f \cdot c_1)(m) \cdot c_2 = ((f \cdot c_1) \cdot c_2)(m).
$$

This is a bimodule because $((b \cdot f) \cdot c)(m) = (b \cdot f)(m) \cdot c = f(m \cdot b) \cdot c = (f \cdot c)(m \cdot b) = (b \cdot (f \cdot c))(m)$.

Notice that the bimodule structure was inherited from the "unused" right module structures of $M$ and $K$.

### $_B \Hom_{C_r}(_A K_C,_B N_C) _A$

Similarly on the right, we can endow the additive group $\Hom_{C_r}(_A K_C,_B N_C)$ with the structure of a $(B,A)$-bimodule. That is, for some right $C$-module homomorphism $f: K \to N$, define
- the left $B$-action to be $(b \cdot f)(k) = b \cdot f(k)$
- and the right $A$-action to be $(f \cdot a)(k) = f(a \cdot k)$.

The left action is well-defined because $(b \cdot f)(k \cdot c) = b \cdot f(k \cdot c) = b \cdot f(k) \cdot c = (b \cdot f)(k) \cdot c$, so $b \cdot f$ is a right $C$-module homomorphism. This has a module structure since
$$
    (b_1 b_2 \cdot f)(k) = b_1 \cdot b_2 \cdot f(k) = b_1 \cdot (b_2 \cdot f)(k) = (b_1 \cdot (b_2 \cdot f))(k).
$$

The right action is well-defined because $(f \cdot a)(k \cdot c) = f(a \cdot k \cdot c) = f(a \cdot k) \cdot c = (f \cdot a)(k) \cdot c$, so $f \cdot a$ is a right $C$-module homomorphism. This gives a module structure with
$$
    (f \cdot a_1 a_2)(k) = f(a_1 \cdot a_2 \cdot k) = (f \cdot a_1)(a_2 \cdot k) = ((f \cdot a_1)\cdot a_2)(k).
$$

This is a bimodule because $((b \cdot f) \cdot a)(k) = (b \cdot f) (a \cdot k) = b \cdot f (a \cdot k) = b \cdot (f \cdot a) (k) = (b \cdot (f \cdot a)) (k)$.

Now notice that this is flipped (compared to above): the left $B$-module structure was inherited from $_B N_C$, and the right $A$-module structure was inherited from $_A K_C$. If we had it the same way around here as before, we could try and define an $(A,B)$-bimodule structure by $(a \cdot f)(k) = f(a \cdot m)$ and $(f \cdot b)(k) = b \cdot f(k)$. Again we can prove that $a \cdot f$ and $f \cdot b$ are right $C$-module homomorphisms. However we run into problems when trying to prove it is a valid module structure. For the left action, we see that $(a_1 a_2 \cdot f)(k) = f(a_1 \cdot a_2 \cdot k) = (a_1 \cdot f)(a_2 \cdot k) = (a_2 \cdot (a_1 \cdot f))(k)$ is in the wrong order. For the right action, we see that $(f \cdot b_1 b_2)(k) = b_1 \cdot b_2 \cdot f(k) = b_1 \cdot (f \cdot b_2)(m) = ((f \cdot b_2) \cdot b_1)(m)$ also has the wrong order.



## Tensor-Hom Adjunctions

Let $A,B,C,D$ be rings. Then let
- $M$ be an $(A,B)$-bimodule,
- $N$ be a $(B,C)$-bimodule,
- $K$ be a $(D,C)$-bimodule,
- and $L$ be a $(A,D)$-bimodule

### $- \otimes_B N_C \dashv \Hom_{C_r}(_B N_C, -)$

We prove that $_D \Hom_{C_r}(_A M \otimes_B N_C, _D K_C)_A \simeq {_D\Hom_{B_r}(_A M_B, _D \Hom_{C_r}(_B N_C,_D K_C)_B)_A}$ as $(D,A)$-bimodules.

Define $\phi: \Hom_{C_r}(M \otimes_B N, K) \to \Hom_{B_r}(M, \Hom_{C_r}(N,K))$ to map
$$
\phi: f \mapsto (m \mapsto (n \mapsto f(m \otimes n))).
$$
This is an $(D,A)$-bimodule homomorphism because
- $\phi(f + g) = (m \mapsto n \mapsto f(m \otimes n) + g(m \otimes n)) = \phi(f) + \phi(g)$
- and
$$
    \begin{align*}
        \phi(d \cdot f \cdot a)(m)(n)
        &= (d \cdot f \cdot a)(m \otimes n) \\
        &= d \cdot f(a \cdot m \otimes n) \\
        &= d \cdot \phi(f)(a \cdot m)(n) \\
        &= (d \cdot (\phi(f) \cdot a)(m))(n) \\
        &= (d \cdot \phi(f) \cdot a)(m)(n).
    \end{align*}
$$

Conversely, define $\psi: \Hom_{B_r}(M, \Hom_{C_r}(N,K)) \to \Hom_{C_r}(M \otimes_B N, K)$ to map
$$
\psi: g \mapsto (m \otimes n \mapsto g(m)(n)).
$$
This is an $(D,A)$-bimodule homomorphism because
- $\psi(f + g) = (m \otimes n \mapsto f(m)(n) + g(m)(n)) = \psi(f) + \psi(g)$
- and
$$
    \begin{align*}
        \psi(d \cdot f \cdot a)(m \otimes n)
        &= (d \cdot f \cdot a)(m)(n) \\
        &= (d \cdot f(a \cdot m))(n) \\
        &= d \cdot f(a \cdot m)(n) \\
        &= d \cdot \psi(f)(a \cdot m \otimes n) \\
        &= (d \cdot \psi(f) \cdot a)(m \otimes n).
    \end{align*}
$$

These functions are clearly inverses (by construction). Explicitly, this looks like
$$
    \begin{align*}
        \psi \circ \phi (f)(m \otimes n)
        &= \psi(m \mapsto n \mapsto f(m \otimes n))(m \otimes n) \\
        &= (m \otimes n \mapsto (m \mapsto n \mapsto f(m \otimes n)))(m \otimes n) \\
        &= f(m \otimes n)
    \end{align*}
$$
and
$$
    \begin{align*}
        \phi \circ \psi (g)(m)(n)
        &= \phi(m \otimes n \mapsto g(m)(n))(m)(n) \\
        &= (m \mapsto n \mapsto (m \otimes n \mapsto g(m)(n)))(m)(n) \\
        &= g(m)(n).
    \end{align*}
$$
Therefore $\phi$ and $\psi$ define the desired bijection.


### $_A M \otimes_B - \dashv \Hom_{A_\ell}(_A M_B, -)$

We prove that $_C \Hom_{A_\ell}(_A M \otimes_B N_C, _A L_D)_D \simeq {_C \Hom_{B_\ell}(_B N_C, _B\Hom_{A_\ell}(_A M_B, _A L_D)_D)_D}$ as $(C,D)$-bimodules.

Define $\phi: \Hom_{A_\ell}(M \otimes_B N, L) \to \Hom_{B_\ell}(N, \Hom_{A_\ell}(M, L))$ to map
$$
\phi: f \mapsto (n \mapsto (m \mapsto f(m \otimes n))).
$$
This is an $(C,D)$-bimodule homomorphism because
- $\phi(f + g) = (n \mapsto m \mapsto f(m \otimes n) + g(m \otimes n)) = \phi(f) + \phi(g)$
- and
$$
    \begin{align*}
        \phi(c \cdot f \cdot d)(n)(m)
        &= (c \cdot f \cdot d)(m \otimes n) \\
        &= f(m \otimes n \cdot c) \cdot d \\
        &= \phi(f)(n \cdot c)(m) \cdot d \\
        &= (\phi(f)(n \cdot c) \cdot d)(m) \\
        &= (c \cdot \phi(f) \cdot d)(n)(m).
    \end{align*}
$$

Conversely, define $\psi: \Hom_{B_\ell}(N, \Hom_{A_\ell}(M, L)) \to \Hom_{A_\ell}(M \otimes_B N, L)$ to map
$$
\psi: g \mapsto (m \otimes n \mapsto g(n)(m)).
$$
This is an $(C,D)$-bimodule homomorphism because
- $\psi(f + g) = (m \otimes n \mapsto f(n)(m) + g(n)(m)) = \psi(f) + \psi(g)$
- and
$$
    \begin{align*}
        \psi(c \cdot f \cdot d)(m \otimes n)
        &= (c \cdot f \cdot d)(n)(m) \\
        &= (f(n \cdot c) \cdot d)(m) \\
        &= f(n \cdot c)(m) \cdot d \\
        &= \psi(f)(m \otimes n \cdot c) \cdot d \\
        &= (c \cdot \psi(f) \cdot d)(m \otimes n).
    \end{align*}
$$

These functions are clearly inverses (by construction). The calculation looks very similar to the previous adjunction.

### Remark

All the above isomorphisms also hold for left modules and right modules separately.







