+++
title = "Negation–antonym square"
description = "Analysis of the exploratory four-corner logical geometry run."
date = 2026-08-13
+++

## Run

Run <code>2026-08-13T113927</code> derives from a pinned embedding checkpoint and contains 600 embeddings, 900 pairwise measurements, and 150 logical squares (30 statements × five languages). Each square holds an affirmative proposition, its direct negation, a lexical opposite, and the negation of that opposite. The run is exploratory: it has no registered hypothesis and is intended to characterise the geometry produced by these controlled transformations.

## The nearest relation is not a simple logical complement

Across the 150 squares, the negated affirmative and lexical opposite (<code>not-A ↔ B</code>) are the nearest pair on average, at 0.957 cosine similarity. They are the closest mean pair in English, Italian, Japanese, and Chinese; Danish instead places the negated affirmative closest to the negated opposite (0.950). This pattern is consistent with the linguistic fact that <em>not beautiful</em> and <em>ugly</em> can be related without being logically equivalent. The experiment does not collapse that distinction: it measures the representation’s placement of the two forms.

{{ plot(path="charts/negation-pair-similarity.html", ratio="700 / 560", title="Logical pair similarity distribution", caption="Figure 1. Distributions of cosine similarity for the six relations among the four logical states, grouped by language.") }}

## Repeated operations are not a global translation

If grammatical negation behaved as a fixed displacement in this embedding space, the edge from A to not-A would align with the edge from B to not-B. The recorded mean negation-edge alignment is −0.104, with values spanning −0.748 to 0.946. Lexical-opposition edges are less aligned still: their mean is −0.350, with values spanning −0.805 to 0.959. Neither operation therefore behaves as a globally parallel transformation across the 150 controlled statements.

The language aggregates preserve this broad result but differ in degree. Danish is the only language with positive mean negation-edge alignment (0.063), whereas English has the lowest (−0.207). Opposition-edge alignments are negative in every language, from −0.172 in Danish to −0.540 in English. These comparisons describe the interaction of the selected phrasing, translations, and model, rather than a stable typology of negation.

{{ plot(path="charts/negation-edge-alignment.html", ratio="700 / 850", title="Repeated logical operation alignment", caption="Figure 2. Alignment distributions for repeated negation and lexical-opposition displacement vectors.") }}

## Closure and the limits of the square metaphor

The two diagonals have relatively similar lengths on average: mean diagonal asymmetry is 0.061. Yet the mean closure residual is 0.582. The distinction matters. Similar diagonals alone do not make a parallelogram; the closure residual captures the remaining vector mismatch. English has both the largest mean diagonal asymmetry (0.082) and closure residual (0.753), while Chinese has the smallest closure residual (0.509). The square is consequently a useful experimental scaffold, not a shape that the embedding geometry simply recovers.

{{ plot(path="charts/negation-embedding-pca.html", ratio="700 / 650", title="Logical states in PCA space", caption="Figure 3. Shared two-dimensional PCA projection of all 600 embeddings, showing the four logical states across the five languages.") }}

## Interpretation and boundary

The run provides evidence against a simple geometric model in which logical negation and lexical opposition each correspond to uniform directions. Instead, their relation depends substantially on the statement and language condition. This is not evidence that embeddings fail at logical representation; it is evidence that the tested operations do not manifest as globally translation-like vectors in this model and corpus. The corpus includes scalar and non-complementary antonyms by design, so a direct logical-equivalence interpretation would be inappropriate. Future work should separate complementarity classes, include human judgements of entailment and contradiction, and compare multiple embedding families.

<ul class="source-links"><li><a href="https://github.com/minimagate/geometry-of-meaning/blob/main/notebooks/logical_boundaries/negation_antonym_square.ipynb">Source notebook</a></li><li><a href="https://github.com/minimagate/geometry-of-meaning/tree/main/runs/logical_boundaries/negation_antonym_square/2026-08-13T113927">Immutable source run</a></li><li><a href="https://github.com/minimagate/geometry-of-meaning/blob/main/runs/logical_boundaries/negation_antonym_square/2026-08-13T113927/summary.json">Run summary</a></li></ul>
