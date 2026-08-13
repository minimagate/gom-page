+++
title = "Cross-lingual compression"
description = "Analysis of semantic decay under progressive compression."
date = 2026-08-07
+++

## Run

Run <code>2026-08-07T164304</code> measures 240 variants: twelve passages × five languages × four compression states. Each sequence begins with a canonical anchor and proceeds through 50%, 25%, and 12.5% versions. Similarity is measured back to the uncompressed text in the same language, so the trajectory captures movement induced by shortening rather than translation distance to English.

## A smooth aggregate decay with uneven local trajectories

The aggregate curve is monotonic: mean cosine similarity declines from 1.000 at the anchor to 0.968 at 50%, 0.930 at 25%, and 0.892 at 12.5%. The interval from 50% to 25% contributes a 0.038 mean decline, slightly larger than the 0.032 decline from the anchor to 50%, while the final step contributes 0.037. The run therefore records continuing displacement at each successive compression level rather than a single sharp aggregate break.

The individual paths are not perfectly uniform. Fifty-nine of 60 text-language sequences decline at every shorter state. The exception is the Chinese human-equality passage, which is recorded at 0.925 at 25% and 0.933 at 12.5%. That reversal is a useful reminder that cosine similarity is a representation-level measure: a shorter generated text can be placed closer to its anchor even while containing less lexical material.

## Language-conditioned trajectories

At 12.5%, Chinese has the highest mean similarity (0.920), followed by Danish (0.890), English (0.889), Italian (0.888), and Japanese (0.876). Chinese also has the shortest mean cumulative trajectory length, 0.372; English has the longest, 0.451. These patterns agree in direction with the mean step-displacement averages, where Chinese is lowest (0.266) and Japanese highest (0.327). They should not be interpreted as a ranking of language-level semantic efficiency: the conditions combine language, translation, compression generations, word segmentation, and one multilingual model.

{{ plot(path="charts/compression-cosine-decay.html", ratio="700 / 330", title="Compression trajectory for Invictus", caption="Figure 1. Cosine similarity to the uncompressed <em>Invictus</em> anchor across the four compression states in five languages.") }}

## Where instability concentrates

The phase-transition score compares the largest step of a trajectory with its mean step. Japanese has the highest language mean (1.324), Chinese the next highest (1.249), and English the lowest (1.146). At the text-language level, the strongest local concentration occurs for the Japanese <em>Metamorphosis</em> opening (1.568). This does not establish a phase transition in the physical sense; it identifies sequences in which one compression step accounts for a disproportionate share of the observed embedding movement.

{{ plot(path="charts/compression-pca.html", ratio="700 / 330", title="Compression embeddings in PCA space", caption="Figure 2. Shared two-dimensional PCA projection of all 240 compression embeddings. Dotted paths connect the successive states of each language trajectory.") }}

The shared projection makes the central analytic distinction visible: compression trajectories have both a common aggregate direction and text-specific deviations. It should be read alongside the scalar measurements above, since projection necessarily suppresses most dimensions of the original representation.

## Interpretation and boundary

Within this design, compression moves embeddings away from their anchors in a reliable aggregate pattern, but the magnitude and timing of that movement are contingent. The run does not isolate whether the difference comes from information deletion, summarisation strategy, language structure, translation choices, or model behaviour. A stronger inference would require independently generated compression sets, human semantic judgements, and replication across embedding models.

<ul class="source-links"><li><a href="https://github.com/minimagate/geometry-of-meaning/blob/main/notebooks/semantic_preservation/cross_lingual_compression.ipynb">Source notebook</a></li><li><a href="https://github.com/minimagate/geometry-of-meaning/tree/main/runs/semantic_preservation/cross_lingual_compression/2026-08-07T164304">Immutable source run</a></li><li><a href="https://github.com/minimagate/geometry-of-meaning/blob/main/runs/semantic_preservation/cross_lingual_compression/2026-08-07T164304/summary.json">Run summary</a></li></ul>
