+++
title = "Negation–antonym square"
description = "Embedding geometry among affirmations, negations, and lexical opposites."
date = 2026-08-13

[extra]
kind = "logical boundaries"
+++

The experiment begins with the [Logical statements v0.1.0 corpus](/data/logical-statements/): 30 controlled statements with canonical versions in five languages and explicit notes on non-complementary antonyms. Each statement is expressed in four related forms: an affirmative proposition $A$, its grammatical negation $\mathrm{not}\text{-}A$, a lexical opposite $B$, and the negation of that opposite $\mathrm{not}\text{-}B$. The experiment tests whether those operations produce distinct and repeatable embedding directions.

For each text-language set, the method measures all six pairwise cosine similarities, including $\cos(\mathbf A,\mathbf N)$ and $\cos(\mathbf N,\mathbf B)$, as well as the alignment between the repeated negation displacements $\cos(\mathbf N-\mathbf A,\mathbf M-\mathbf B)$. It separately tests whether the four vectors close like a parallelogram through $\lVert\mathbf A+\mathbf M-\mathbf N-\mathbf B\rVert_2$. Here $\mathbf A$, $\mathbf N$, $\mathbf B$, and $\mathbf M$ are the model embeddings of the four forms. These are measurement definitions, not assumptions that antonymy is logical complementarity or that the resulting points should form a literal square.

The experiment is exploratory and deliberately does not register a hypothesis. Its run-level measurements and interactive visual analysis live in its observation.

<ul class="source-links">
  <li><a href="https://github.com/minimagate/geometry-of-meaning/tree/main/experiments/logical_boundaries/negation_antonym_square">Protocol and analysis</a></li>
  <li><a href="/observations/logical-corners/">Run analysis and interactive charts</a></li>
</ul>
