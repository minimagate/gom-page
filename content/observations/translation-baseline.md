+++
title = "Translation embedding baseline"
description = "A 48-measurement calibration of translation-conditioned displacement across twelve passages and four translations."
date = 2026-08-04
+++

## Result in brief

Translation did not map the twelve passages to identical points in this run. Across the 48 English-to-translation comparisons, mean cosine similarity was **0.8854** (standard deviation **0.0265**), spanning **0.8261–0.9268**. The corresponding mean Euclidean distance was **0.4758**. Italian and Danish occupied the higher end of the recorded English-reference similarities; Japanese and Chinese occupied the lower end. That ordering appeared across most passages, but the amount of separation was text-dependent.

This is a calibration result, not a measurement of an intrinsic distance between languages. It combines one canonical translation of each passage, one embedding model, and English as a fixed reference. The observed displacement can arise from translation choices and from the model's treatment of scripts, morphology, tokenization, and language—not only from a change in proposition-level meaning.

## Question and design

The experiment asks how far the embedding of a passage moves when its language changes while no deliberate semantic transformation is applied. This establishes a reference scale for later semantic-preservation experiments: if translations already begin at different coordinates, a later trajectory cannot be attributed to compression or another manipulation without accounting for that initial displacement.

Immutable run <code>2026-08-04T210618</code> used <code>multilingual-e5-large</code> with random seed 42. The selected corpus contains twelve passages in seven categories. For each passage, the run compares Italian, Chinese, Japanese, and Danish against the English version, producing **12 × 4 = 48** metric rows. Each row records cosine similarity and Euclidean distance to English.

The embedding table has 65 rows rather than 60 because it also preserves five source-language originals outside the five comparison languages: two German, one French, and two Ancient Greek records. The plotted multilingual comparison is the complete set of **60 passage–language embeddings** for English, Italian, Chinese, Japanese, and Danish. Within those twelve English records, seven are originals and five are translations from a non-English source. This detail matters: “English reference” does not always mean “original text.”

## Language-level distributions

The four language distributions do not merely differ in their means. Italian recorded a mean cosine of **0.9099**, a median of **0.9143**, and the smallest standard deviation (**0.0108**). Danish recorded a mean of **0.9027**, a median of **0.9054**, and a standard deviation of **0.0132**. Japanese and Chinese were lower and more dispersed: Japanese averaged **0.8704** (SD **0.0185**), while Chinese averaged **0.8584** (SD **0.0188**).

{{ plot(path="charts/translation-baseline-language-distribution.html", ratio="720 / 520", title="English-reference cosine similarity by translation language", caption="Figure 1. Box plots and all 48 individual measurements from metrics.parquet: twelve passages per translation language, with English as the reference. Boxes show the interquartile range, centre lines the median, and points the individual passages. Run 2026-08-04T210618; multilingual-e5-large.") }}

Italian supplied the highest similarity for eight of the twelve passages and Danish for the remaining four. Chinese supplied the lowest value for eleven passages; Japanese was lowest only for <em>Invictus</em>. These counts describe the consistency of the ordering inside this run. They do not determine whether the cause lies in translation quality, linguistic form, source-language history, or model calibration.

Euclidean distance gives the inverse ordering: Italian averaged **0.4239**, Danish **0.4402**, Japanese **0.5079**, and Chinese **0.5311**. This is not an independent pattern. The saved embeddings are effectively unit-normalised, and the recorded distances agree with <code>sqrt(2 − 2 × cosine)</code> to within 0.0000004. The two columns therefore express nearly the same geometric relation on different scales.

## Passage-level heterogeneity

Averages by language conceal substantial passage variation. The lowest single value was **0.8261**, for the Chinese Einstein passage. The highest was **0.9268**, for the Danish <em>Invictus</em>. Passage means ranged from **0.8623** for <em>On the Electrodynamics of Moving Bodies</em> to **0.9039** for <em>Invictus</em>.

{{ plot(path="charts/translation-baseline-text-language-heatmap.html", ratio="720 / 660", title="Passage-by-language similarity matrix", caption="Figure 2. Every English-reference cosine measurement, with passages ordered by their mean across the four translations. No aggregation is shown inside a cell. Source: 48 rows from metrics.parquet, run 2026-08-04T210618.") }}

The within-passage spread also changes markedly. The declaration extract spans **0.0799** from its lowest to highest translation value, and the Einstein extract spans **0.0783**. Hamlet spans only **0.0310**. This makes the passage–language matrix more informative than a single baseline threshold: a similarity of 0.88 can be above one passage's translation range and below another's.

Category summaries are descriptive but especially fragile here. Scientific text averaged **0.8720** and philosophy **0.8973**, the lowest and highest recorded category means. Yet philosophy contains three passages, science two, and political, drama, and autobiography only one each. With no replication beyond these individual passages and no inferential model, category labels cannot separate genre effects from passage identity or translation history.

## Language centroids: a second level of aggregation

The run also averages the twelve embeddings within each language and measures cosine distance between the resulting centroids. These distances range from **0.0588** for English–Italian to **0.1145** for Chinese–Danish. English–Chinese is **0.0926**; Japanese–Chinese is **0.0594**. Thus, the language pairs that sit close at the centroid level are not restricted to pairs involving the English reference.

{{ plot(path="charts/translation-baseline-centroid-distances.html", ratio="720 / 560", title="Pairwise cosine distance between language centroids", caption="Figure 3. Each centroid is the arithmetic mean of the twelve 1,024-dimensional passage embeddings for one comparison language. Cells report 1 minus cosine similarity between centroid vectors; the diagonal is zero. Run 2026-08-04T210618; 60 comparison-language embeddings.") }}

Centroid distance answers a different question from the first two figures. It compares the average location of a language cloud, whereas the English-reference metrics pair translations passage by passage. Averaging can cancel text-specific directions, so a small centroid distance does not imply that every corresponding translation pair is close. Conversely, a larger centroid distance does not identify which passages produced it.

## A reduced view of the embedding geometry

The final view projects all run embeddings onto a shared principal-component basis after standardising each of the 1,024 embedding coordinates. The PCA basis is fitted on all 65 embedding rows, including the five non-comparison source-language originals; the figure displays the 60 rows in the five comparison languages. PC1 explains **9.7%** and PC2 **9.1%** of standardised-coordinate variance, or **18.8%** together. Grey lines join the five language versions of the same passage.

{{ plot(path="charts/translation-baseline-pca-geometry.html", ratio="720 / 620", title="Two-component projection of the multilingual embedding space", caption="Figure 4. Shared PCA projection fitted after per-coordinate standardisation on all 65 run embeddings; 60 English, Italian, Chinese, Japanese, and Danish points are displayed. Marker colour encodes language and grey connectors identify versions of the same passage. PC1 and PC2 retain 18.8% of the standardised-coordinate variance, so distances in this view are illustrative rather than complete.") }}

The projection separates several language-coloured regions along PC2 while still showing passage-specific clusters and connectors. That visual organisation is compatible with the scalar distributions and centroid distances, but it is not a lossless map: more than four-fifths of the standardised-coordinate variance lies outside these two axes. The PCA view should therefore be used to inspect structure and outliers, not to read exact high-dimensional distances from the screen.

## What this baseline can support

The run establishes a measured scale for translation-conditioned displacement under one fixed setup. Its 48 paired values show that the reference condition is distributed rather than singular, and that both language and passage index the recorded variation. Later experiments can compare their effects with these passage- and language-specific baselines instead of treating the English and translated anchors as coincident.

The run does **not** isolate translation quality, language family, script, genre, source language, or any model-training effect. It includes one translation per passage-language pair, only twelve passages, uneven category counts, and one embedding model version. English is an analysis reference even when it is itself a translation. There are no repeated translations, alternative translators, uncertainty intervals, hypothesis tests, or cross-model replications. Accordingly, the numerical ordering is a property of this corpus–translation–model combination and should not be generalised into a ranking of languages.

## Reproducibility

The figures are generated from the immutable run's <code>metrics.parquet</code> and <code>embeddings.parquet</code>. The run manifest records commit <code>d32d641b0e8c36f6db90bd695dd18c2ac118451a</code>, seed 42, and model <code>multilingual-e5-large</code>. The publication builder exports self-contained HTML alongside PNG and SVG versions and records row counts and PCA provenance in its export index.

<ul class="source-links"><li><a href="https://github.com/minimagate/geometry-of-meaning/blob/main/notebooks/semantic_preservation/translation_embedding_baseline.ipynb">Source notebook</a></li><li><a href="https://github.com/minimagate/geometry-of-meaning/tree/main/runs/semantic_preservation/translation_embedding_baseline/2026-08-04T210618">Immutable source run</a></li><li><a href="https://github.com/minimagate/geometry-of-meaning/blob/main/runs/semantic_preservation/translation_embedding_baseline/2026-08-04T210618/summary.json">Run summary</a></li></ul>
