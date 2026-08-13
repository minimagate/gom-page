+++
title = "Translation embedding baseline"
description = "Analysis of the multilingual reference run."
date = 2026-08-04
+++

## Run

Run <code>2026-08-04T210618</code> establishes the reference condition for the semantic-preservation programme. It embeds twelve canonical passages in English, Italian, Chinese, Japanese, and Danish with <code>multilingual-e5-large</code>. English serves as the comparison text, yielding 48 English-to-translation measurements. No compression, paraphrase, or logical transformation is introduced: the displacement measured here is translation-conditioned displacement.

## Translation is not a zero-distance operation

The mean cosine similarity to the English reference is 0.885, with a mean Euclidean distance of 0.476. The range is material: the lowest individual measurement is 0.826 for the Chinese version of the Einstein passage, while the highest is 0.927 for the Danish version of <em>Invictus</em>. The baseline therefore makes an important methodological point for all later experiments: an embedding trajectory cannot be interpreted as the effect of compression alone when its starting texts already occupy a non-trivial multilingual neighbourhood.

Language averages separate in this run. Italian has the highest mean similarity to English (0.910), followed by Danish (0.903); Japanese (0.870) and Chinese (0.858) are lower. The corresponding Euclidean means follow the inverse ordering: Italian is nearest at 0.424 and Chinese furthest at 0.531. These are properties of the particular translations, passages, and model representation—not estimates of an intrinsic distance between languages.

## Text-level structure

The passage averages also vary. <em>On the Electrodynamics of Moving Bodies</em> is the least self-consistent across its translations (mean cosine 0.862), followed by the declaration extract (0.874) and the <em>Odyssey</em> invocation (0.879). <em>Invictus</em> is the most self-consistent (0.904). Category averages cover a narrower interval: scientific passages average 0.872, while philosophy averages 0.897. The broader dispersion among individual texts than among categories cautions against treating genre labels as a sufficient explanation of multilingual drift.

{{ plot(path="charts/translation-radar.html", ratio="700 / 380", title="Translation embedding comparison for Invictus", caption="Figure 1. The five <em>Invictus</em> translations represented in a shared six-component PCA projection of the run embeddings.") }}

The figure gives a local view of one passage rather than a global language ordering. Its PCA coordinates are a reduced representation fitted across the run; they support inspection of relative profile differences but do not exhaust the original embedding geometry.

## Interpretation and boundary

This baseline is best read as a calibration experiment. It quantifies the distance that remains after the source meaning has been held as constant as the canonical translation set permits. Subsequent compression results should therefore be read against this already-displaced multilingual baseline. The result cannot distinguish semantic change from translation choices, morphology, tokenization, or model-specific cross-lingual behaviour. Replication across translation sets and embedding models is necessary before generalising beyond this corpus.

<ul class="source-links"><li><a href="https://github.com/minimagate/geometry-of-meaning/blob/main/notebooks/semantic_preservation/translation_embedding_baseline.ipynb">Source notebook</a></li><li><a href="https://github.com/minimagate/geometry-of-meaning/tree/main/runs/semantic_preservation/translation_embedding_baseline/2026-08-04T210618">Immutable source run</a></li><li><a href="https://github.com/minimagate/geometry-of-meaning/blob/main/runs/semantic_preservation/translation_embedding_baseline/2026-08-04T210618/summary.json">Run summary</a></li></ul>
