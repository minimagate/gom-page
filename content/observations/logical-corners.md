+++
title = "Negation, antonymy, and the geometry between them"
description = "A multilingual exploratory report on 150 four-corner semantic configurations in a pinned embedding model."
date = 2026-08-13
+++

## Research question

What shape appears in an embedding space when a proposition is varied along two controlled linguistic operations: direct grammatical negation and lexical opposition?

The experiment begins with an affirmative statement, **A**—for example, “The painting is beautiful.” It constructs three related states: **not-A** (“The painting is not beautiful”), **B**, the lexical opposite (“The painting is ugly”), and **not-B** (“The painting is not ugly”). These four texts form an experimental square. The square is not assumed to be logical in the strict truth-functional sense. In many cases, *not beautiful* does not entail *ugly*, just as *not full* does not entail *empty*. The corpus records these middle states and scope complications explicitly.

The central question is therefore geometric and descriptive: does the embedding model arrange these controlled forms as if negation and lexical opposition were stable, repeatable transformations, or does the arrangement depend on the proposition and language?

## Design and provenance

The source is immutable run <code>2026-08-13T113927</code> of <code>negation_antonym_square</code>. It contains 30 project-generated base statements, each represented in English, Italian, Chinese, Japanese, and Danish. Every text–language combination has four logical states, producing 600 embedding records and 150 complete squares. The analysis contains all six unique pair relations within every square—900 pairwise measurements—and one unduplicated square-level record per text and language.

All texts were embedded with <code>intfloat/multilingual-e5-large</code>, pinned to revision <code>3d7cfbd…a574f3</code>, yielding 1,024-dimensional vectors. The completed geometry run reuses byte-identical embeddings from checkpoint <code>2026-08-13T113030</code>; the recorded random seed is 42. This is an exploratory run with no registered hypothesis.

The design covers adjectives, states, actions, relations, and quantified propositions, but it is not balanced by predicate kind: seven of the 30 bases are copular adjectives, three are copular states, two are causal-change verbs, two are evaluative adjectives, and each of the other 16 predicate labels occurs once. Consequently, predicate-level averages are descriptive cells, not equally powered comparisons.

## 1. Which corners are nearest?

The nearest mean relation across all 150 squares is **not-A ↔ B**, with cosine similarity 0.957. Its median is 0.960 and its observed range is 0.866–0.994. This is the relation between grammatical denial and the affirmative lexical opposite: *not beautiful* versus *ugly*, *did not praise* versus *criticized*, and so on.

The next-nearest mean relation is **not-A ↔ not-B** at 0.948, followed by **A ↔ not-B** at 0.944. The remaining three means are lower and close together: **A ↔ B** at 0.922, **B ↔ not-B** at 0.921, and **A ↔ not-A** at 0.919. The ranking is not a logical ordering. It records proximity in this model for this set of phrasings; high similarity can reflect shared subject, syntax, vocabulary, or polarity marking as well as the intended semantic relation.

{{ plot(path="charts/negation-pair-similarity.html", ratio="700 / 560", title="Cosine similarity for all six corner relations", caption="Figure 1. Original-space cosine distributions for 900 pair measurements: 30 statements × five languages × six unique pairs. Each coloured box contains 30 observations. The figure uses the pinned 1,024-dimensional embeddings directly; it does not use PCA. Run 2026-08-13T113927, multilingual-e5-large revision 3d7cfbd…a574f3.") }}

The language-conditioned means retain much of this ordering. **not-A ↔ B** is the highest mean pair in English (0.947), Italian (0.963), Japanese (0.962), and Chinese (0.969). Danish is the exception: **not-A ↔ not-B** is highest at 0.950, compared with 0.944 for **not-A ↔ B**. English also shows visibly lower distributions for several relations that include an affirmative corner—for example, mean **A ↔ not-A** is 0.881 in English versus 0.920–0.940 in the other four languages.

Those differences should not be read as a ranking of languages. Each language has different negation morphology, contractions, tokenization, and generated phrasing, while only one multilingual model is tested. Language is therefore a bundled condition in this run, not an isolated causal variable.

## 2. Where does grammatical denial approach the lexical opposite?

The overall **not-A ↔ B** mean conceals structured variation across predicate types. The heatmap separates the 150 measurements into 20 predicate-kind rows and five language columns. The darkest cells include authority decisions, comparisons, evaluative adjectives, and several morphologically close oppositions. The lightest cell is the English quantified statement “All six lamps are on”: *not all six lamps are on* remains distinct from *all six lamps are off*, producing cosine 0.866. Danish for the same base is similarly low at 0.881.

This is precisely the sort of scope distinction the corpus was designed to preserve. A negated universal permits mixed configurations; the lexical opposite describes a uniform off-state. Other low cells likewise occur where a middle alternative is explicit: unchanged temperature between *rose* and *fell*, east or west between *north* and *south*, and partial filling between *full* and *empty*.

{{ plot(path="charts/negation-predicate-gap.html", ratio="700 / 760", title="The not-A to B gap by predicate kind and language", caption="Figure 2. Mean original-space cosine for not-A ↔ B, grouped by predicate kind and language. Each cell averages all selected bases of that kind in one language: 80 of 100 cells contain one observation, while copular-adjective cells contain seven, copular-state cells contain three, and causal-change and evaluative-adjective cells contain two. Colour therefore supports descriptive comparison only; unequal cell sizes preclude a balanced predicate-effect estimate. Run 2026-08-13T113927.") }}

At the predicate-row level, the recorded means range from 0.912 for the single quantified-state base to 0.984 for the single transitive-authority base. These endpoints are not stable estimates of predicate classes because most rows contain only five measurements—one base translated into five languages. They are useful as a map back to concrete cases, especially when read with the per-statement logical caveats, but not as evidence that one grammatical class is inherently more “logical” in embedding space.

## 3. Are repeated operations parallel?

A simple vector model of negation would predict that the displacement from **A → not-A** points in approximately the same direction as **B → not-B**. Cosine alignment quantifies that claim: +1 means parallel, 0 means orthogonal, and −1 means opposite. The analogous comparison for lexical opposition aligns **A → B** with **not-A → not-B**.

Across the 150 squares, mean negation-edge alignment is −0.104 (median −0.209; range −0.748 to 0.946). Ninety-six squares have negative alignment and 54 have positive alignment. Lexical-opposition edges are more often opposed: their mean alignment is −0.350 (median −0.464; range −0.805 to 0.959), with 126 negative and 24 positive squares.

{{ plot(path="charts/negation-edge-alignment.html", ratio="700 / 850", title="Alignment of repeated negation and opposition displacements", caption="Figure 3. Square-level cosine alignment distributions, 30 squares per language. Top: A→not-A compared with B→not-B. Bottom: A→B compared with not-A→not-B. Values come from the original 1,024-dimensional vectors; no projection is involved. Positive values indicate similarly directed displacement vectors, not logical equivalence. Run 2026-08-13T113927.") }}

The distributions are broad, so their means should not be mistaken for universal directions. Negation alignment is positive for more than a third of squares, and both metrics include strongly positive cases. The directional relation “north of / south of” in Chinese, for example, records alignments of 0.946 for negation and 0.959 for opposition. At the other extreme, the Chinese “simple / complex” square records −0.748 and −0.805. The experiment therefore does not recover one shared translation vector for either operation across its full population. It recovers heterogeneous local displacements.

Language aggregation changes degree but not that heterogeneity. Danish has the only positive mean negation alignment (0.063), while English has the most negative (−0.207). Mean opposition alignment is negative in every language, from −0.172 in Danish to −0.540 in English. Because text identity is repeated across languages but wording and model processing change together, these aggregates locate variation without explaining its source.

## 4. Does the four-corner construction close?

Two measurements test different parts of the square metaphor. **Diagonal asymmetry** is the absolute difference between the two diagonal distances. It can be small even when the four vectors do not form a parallelogram. **Closure residual** measures the remaining vector mismatch; zero would indicate exact parallelogram closure.

Mean diagonal asymmetry is 0.061 (median 0.043; range 0.0003–0.238), whereas mean closure residual is 0.582 (median 0.610; range 0.069–0.965). The two measures have a Pearson correlation of 0.532 within these 150 squares: larger diagonal imbalance tends to accompany larger residuals, but diagonal balance alone does not determine closure.

{{ plot(path="charts/negation-square-closure.html", ratio="700 / 560", title="Diagonal balance versus parallelogram closure", caption="Figure 4. One point per text–language square (n = 150). The x-axis is absolute diagonal-distance asymmetry; the y-axis is the L2 closure residual, both computed in the original embedding space. Colour marks language. The displayed association is descriptive (Pearson r = 0.532); no regression or causal model was fitted. Run 2026-08-13T113927.") }}

The scatter also shows why a single average shape would be inadequate. Chinese “longer / shorter” has the smallest closure residual (0.069), followed by Chinese “north / south” (0.079). English “simple / complex” has the largest (0.965), followed by English “permit / prohibit” (0.957). English has the largest language-level mean for both diagonal asymmetry (0.082) and closure residual (0.753); Chinese has the smallest mean closure residual (0.509). These are observed cases and aggregates, not estimates of language-specific logical capacity.

## 5. What does a global projection reveal—and omit?

The shared PCA view is useful for seeing the run’s dominant large-scale organization. PCA was fitted once on all 600 vectors, so every point uses the same basis. PC1 explains 9.8% of total variance and PC2 explains 6.7%, or 16.5% together. State is encoded by colour and language by marker shape.

{{ plot(path="charts/negation-embedding-pca.html", ratio="700 / 650", title="All logical states in a shared PCA plane", caption="Figure 5. Shared two-dimensional PCA of all 600 run embeddings. PC1 explains 9.8% and PC2 6.7% of variance (16.5% combined). PCA was fitted on the complete run population; colours encode logical state and marker shapes encode language. The plot is a lossy global orientation view and must not be used to read exact pairwise similarity, direction alignment, or closure.") }}

The projection is visibly structured by both language and state, but its two axes discard 83.5% of the run-wide variance. Apparent overlaps and distances in the plane can therefore differ from the original 1,024-dimensional measurements. Figures 1–4, not this PCA view, provide the quantitative basis for claims about proximity, displacement alignment, and closure. The projection’s legitimate role is narrower: it shows that the four states are not arranged in one clean, universally separated configuration across the complete multilingual population.

## Synthesis

Three observations survive the move from individual charts to the full run record.

First, grammatical negation and lexical opposition are not interchangeable, yet their boundary is graded in the model. **not-A ↔ B** is the nearest mean pair in four languages and overall, while quantified and middle-state cases show some of the largest recorded separations.

Second, proximity does not imply a shared operation vector. Although many negated affirmatives lie close to lexical opposites, the two repeated negation edges and the two repeated opposition edges vary widely in direction. Their mean alignments are negative, and both distributions span negative and positive values.

Third, the semantic-square scaffold does not generally become a parallelogram. Similar diagonal lengths occur more often than near-zero closure residuals, and the relationship between the two quantities is only partial. The construction is useful because it makes these departures measurable; the name “square” describes the experimental design, not a recovered Euclidean form.

## Limits of inference

This run characterises one synthetic corpus, one set of generated and translated formulations, and one pinned multilingual embedding model. It does not test entailment or contradiction directly, include human semantic judgements, compare model families, or estimate uncertainty over independently sampled corpora. The 30 bases deliberately mix scalar antonyms, near-complements, relational opposites, action verbs, and quantified claims. That diversity is informative for case-finding but confounds broad grammatical comparisons, especially because predicate kinds are unevenly represented.

The language contrasts also combine translation choice, morphology, syntax, tokenization, and model training. They should be treated as conditions in this dataset rather than typological findings. A stronger follow-up would pre-register contrasts, balance complementarity and predicate classes, add native-speaker review and human entailment labels, and repeat the analysis across independently trained embedding families.

<ul class="source-links"><li><a href="https://github.com/minimagate/geometry-of-meaning/blob/main/experiments/logical_boundaries/negation_antonym_square/README.md">Experiment protocol</a></li><li><a href="https://github.com/minimagate/geometry-of-meaning/blob/main/notebooks/logical_boundaries/negation_antonym_square.ipynb">Objective source notebook</a></li><li><a href="https://github.com/minimagate/geometry-of-meaning/tree/main/runs/logical_boundaries/negation_antonym_square/2026-08-13T113927">Immutable source run</a></li><li><a href="https://github.com/minimagate/geometry-of-meaning/blob/main/runs/logical_boundaries/negation_antonym_square/2026-08-13T113927/manifest.yaml">Run manifest</a></li><li><a href="https://github.com/minimagate/geometry-of-meaning/blob/main/runs/logical_boundaries/negation_antonym_square/2026-08-13T113927/summary.json">Run summary</a></li></ul>
