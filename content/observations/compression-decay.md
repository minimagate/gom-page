+++
title = "Compression decay across five languages"
description = "A run-level report on semantic displacement, heterogeneity, and trajectory geometry under progressive text compression."
date = 2026-08-07
+++

## Research question and result in brief

When the same twelve passages are progressively shortened in English, Italian, Chinese, Japanese, and Danish, how far do their multilingual embedding representations move from the uncompressed text? Run <code>2026-08-07T164304</code> records a clear aggregate gradient: mean cosine similarity to the same-language anchor falls from 1.000000 at the verbatim state to 0.968187 at the 50% target, 0.929861 at 25%, and 0.892483 at 12.5%.

That compact result conceals three features of the run. First, Chinese has the highest mean similarity at every compressed state, including 0.919633 at 12.5%. Second, the ordering of the other four languages changes across levels; there is no single stable ranking beneath Chinese. Third, progressive paths are indirect: at the terminal state, their cumulative three-step Euclidean length averages 1.9828 times the direct distance from anchor to endpoint. The experiment therefore records not only endpoint decay, but substantial intermediate movement that an endpoint-only comparison would omit.

These are properties of one generated variant set measured with one embedding model. They do not, on their own, establish that a language intrinsically carries more meaning per word or that any generated compression is semantically adequate to a human reader.

## Design and measurement

The immutable run contains 240 variants: 12 canonical passages × 5 languages × 4 target compression states. Each text-language sequence begins with an unchanged 100% anchor, followed by generated 50%, 25%, and 12.5% states. The corpus spans seven recorded categories and includes texts whose source languages are English, French, German, and Ancient Greek; all five analyzed language versions are treated as parallel starting points.

All 240 variants were embedded with <a class="model-link" href="https://huggingface.co/intfloat/multilingual-e5-large" target="_blank" rel="noopener noreferrer"><code>multilingual-e5-large</code><span aria-hidden="true"> ↗</span><span class="sr-only"> (opens the Hugging Face model card in a new tab)</span></a>, recorded model version <code>1.0.0</code>. The run fixes random seed 42 and records generation-prompt hash <code>5f33194…d348</code>. The principal endpoint measure is cosine similarity between a compressed variant and the 100% anchor for the same text in the same language. Euclidean step displacement measures movement between adjacent states, while cumulative trajectory length sums the three adjacent movements. The phase-transition score is the largest adjacent step divided by the mean adjacent step for that trajectory.

This within-language anchor is an important design choice. It removes the initial distance between a translation and an English reference from the compression trajectory. The pinned translation-baseline run is therefore not merged into these figures: it answers a different question about cross-language placement, whereas this report asks how each language version moves from its own starting point.

The stated percentages are generation targets, not independently verified information-content units. The run metrics do not provide a language-neutral measure of realized compression, and word counts are especially difficult to compare across writing systems. Throughout this report, “50%,” “25%,” and “12.5%” name protocol states rather than exact cross-lingual information ratios.

## Aggregate decay is continuous across all three steps

For an embedding $\mathbf v_{t,\ell,k}$ at level $k$, the line chart reports its cosine to the same text-language anchor $\mathbf a_{t,\ell}=\mathbf v_{t,\ell,1.00}$:

<div class="math-display">$$
C_{t,\ell,k}=
\frac{\mathbf a_{t,\ell}\cdot\mathbf v_{t,\ell,k}}
{\lVert\mathbf a_{t,\ell}\rVert_2\lVert\mathbf v_{t,\ell,k}\rVert_2}.
$$</div>

The model stores 1,024-dimensional L2-normalized vectors, but the implementation retains the full cosine expression rather than assuming unit length. Each plotted language value is the arithmetic mean of its 12 passage-level $C_{t,\ell,k}$ measurements.

The global mean cosine loss is 0.031813 from 100% to 50%, 0.038326 from 50% to 25%, and 0.037378 from 25% to 12.5%. No single interval contains an aggregate collapse; movement continues at a similar cosine scale through the two later steps. The interquartile interval also widens as compression proceeds: it is 0.960859–0.976371 at 50%, 0.913621–0.946729 at 25%, and 0.877167–0.909277 at 12.5%.

{{ plot(path="charts/compression-aggregate-decay.html", ratio="700 / 520", title="Aggregate cosine decay by language", caption="Figure 1. Arithmetic mean cosine similarity to the same-language 100% anchor at each target state; each language mean contains 12 passages. The grey envelope is the 25th–75th percentile interval across all 60 passage-language values at a state. Source: metrics.parquet, cross_lingual_compression run 2026-08-07T164304, multilingual-e5-large 1.0.0, 240 metric rows.") }}

Chinese is separated from the other language means at all three compressed states: 0.975352 at 50%, 0.949394 at 25%, and 0.919633 at 12.5%. Yet the trajectories below it cross. Italian is second at 50% (0.970791) but fourth at 12.5% (0.887859); Japanese is second at 25% (0.933184) and fifth at 12.5% (0.876023). Danish moves from the lowest mean at 50% (0.964322) to second at 12.5% (0.889892), though its terminal advantage over English is only 0.000882 and over Italian 0.002033. Those small gaps should not be treated as stable language effects without replication.

## Terminal outcomes vary across both language and passage

The 12.5% state provides the strongest compression contrast. Chinese has both the highest terminal mean and the narrowest recorded spread: mean 0.919633, standard deviation 0.008634, and range 0.908701–0.933744. Japanese has the lowest mean, 0.876023, with range 0.854577–0.899141. Danish, English, and Italian occupy a closely packed middle, but their distributions differ: Danish spans 0.846109–0.923120, while Italian spans 0.873048–0.917850.

{{ plot(path="charts/compression-terminal-distribution.html", ratio="700 / 540", title="Terminal cosine distributions", caption="Figure 2. Box plots of the 12 passage-level cosine similarities observed for each language at the 12.5% target state; points are individual passages. Boxes show the median and interquartile range. Source: metrics.parquet, run 2026-08-07T164304, multilingual-e5-large 1.0.0, n=12 per language (60 terminal rows).") }}

Passage identity matters as well. Averaged across five languages, <em>The Metamorphosis</em> opening has the highest terminal mean, 0.911863, while the natural-selection passage has the lowest, 0.886061. More revealing than that 0.025802 difference are the within-passage ranges. The human-equality passage spans 0.854577 in Japanese to 0.933043 in Chinese; the Marcus Aurelius passage spans 0.846109 in Danish to 0.930301 in Chinese. By contrast, the Wollstonecraft passage occupies a narrower 0.875139–0.908701 interval.

{{ plot(path="charts/compression-terminal-heatmap.html", ratio="700 / 690", title="Passage-by-language terminal similarity", caption="Figure 3. Every cosine similarity at the 12.5% state, with passages ordered by their five-language mean. Each cell compares a generated keyword-state variant with its own text-language 100% anchor; values are not cross-language similarities. Source: metrics.parquet, run 2026-08-07T164304, multilingual-e5-large 1.0.0, 12 passages × 5 languages = 60 cells.") }}

This matrix discourages a purely language-level reading. Chinese is the maximum in ten of the twelve passage rows, but the remaining structure is text-specific: English leads for <em>The Metamorphosis</em>, Danish exceeds English for the Einstein passage, and the lowest cell in the entire matrix occurs in Danish rather than Japanese. With only one variant per text-language-level condition, the run cannot separate a language tendency from generation-specific choices in any cell.

## The final reduction produces the largest average step

Cosine-to-anchor curves describe endpoints relative to the start; step displacement describes what happens between successive generated states. With the four state vectors ordered as $\mathbf v_0,\ldots,\mathbf v_3$, the reported quantities are:

<div class="math-display">$$
\Delta_i=\lVert\mathbf v_i-\mathbf v_{i-1}\rVert_2,
\qquad L_i=\sum_{j=1}^{i}\Delta_j.
$$</div>

Pooled across all languages and passages, mean Euclidean step displacement rises from 0.248357 for 100% → 50%, to 0.306116 for 50% → 25%, and 0.358689 for 25% → 12.5%. The distributions overlap, so this is an aggregate ordering rather than a universal sequence-level rule.

{{ plot(path="charts/compression-step-displacement.html", ratio="700 / 560", title="Adjacent-step displacement distributions", caption="Figure 4. Euclidean embedding displacement between adjacent compression states, grouped by transition and language. Each box contains 12 passage trajectories; anchor rows are excluded. Source: metrics.parquet, run 2026-08-07T164304, multilingual-e5-large 1.0.0, 180 adjacent-step measurements.") }}

The timing differs by language. Chinese has the smallest mean displacement in the first step (0.218907) and middle step (0.252869), but its final step increases to 0.325047. Japanese changes more sharply: its means are 0.259337, 0.289754, and 0.431672, making its final step the largest language-transition mean in the run. Italian also concentrates more movement in the final step (0.371491). These measurements identify where representation movement occurs; they do not identify which omitted phrases caused it.

The phase-transition score provides a sequence-level version of this concentration: $P=\max_i\Delta_i/\operatorname{mean}_i\Delta_i$ across the three nonzero steps. Mean scores range from 1.146260 in English to 1.324312 in Japanese. The largest individual score is 1.568472 for the Japanese <em>Metamorphosis</em> trajectory, followed by 1.519191 for the Japanese Douglass trajectory. “Phase transition” here is a metric name, not evidence of a physical discontinuity or a threshold shared across passages.

## Progressive paths are nearly twice their endpoint distance

For every text-language sequence, cumulative path length exceeds direct anchor-to-terminal distance, as required by the triangle inequality. The size of the gap is informative. Across all 60 trajectories, the path/direct ratio has mean 1.982778, median 1.966854, and range 1.668399–2.393711. In other words, the sequence of intermediate embeddings travels roughly twice as far as the final endpoint’s straight-line separation from its anchor.

{{ plot(path="charts/compression-path-geometry.html", ratio="700 / 590", title="Cumulative path length versus endpoint distance", caption="Figure 5. For each of 60 text-language trajectories, the x-axis is direct Euclidean distance from the 100% anchor to the 12.5% state and the y-axis is cumulative Euclidean length across the 100%→50%→25%→12.5% path. The dashed equality line is the theoretical straight-path lower bound. Source: metrics.parquet, run 2026-08-07T164304, multilingual-e5-large 1.0.0.") }}

The ratio is not dominated by one language: language means range from 1.932418 in Danish to 2.006112 in Italian. The longest relative detour is the Italian <em>Odyssey</em> trajectory (2.393711), followed by English <em>Hamlet</em> (2.338857) and Chinese human equality (2.325698). This indirectness means that two compressed states can end at similar anchor distances after following quite different intermediate routes. It also cautions against reading a monotonic cosine curve as motion along one stable semantic axis.

## Anchor-centered geometry broadens as compression deepens

To inspect direction as well as magnitude, each embedding was converted to a displacement vector by subtracting its own text-language 100% anchor. A single two-component PCA was then fitted to all 240 displacement vectors, including the 60 zero anchors, and the three non-anchor states were plotted in that common plane. PC1 explains 9.57% of displacement variance and PC2 4.44%, for 14.01% combined.

{{ plot(path="charts/compression-displacement-pca.html", ratio="700 / 570", title="Anchor-centered compression displacement PCA", caption="Figure 6. Shared PCA projection of anchor-centered displacement vectors: for each text-language state, its 100% anchor embedding is subtracted before fitting PCA. Panels show the 50%, 25%, and 12.5% states in the same coordinate system. PC1 explains 9.57% and PC2 4.44% of displacement variance. Source: embeddings.parquet, run 2026-08-07T164304, multilingual-e5-large 1.0.0, PCA basis = all 240 run embeddings after within-trajectory anchor subtraction.") }}

The projected point cloud expands from 50% to 12.5%, consistent with the larger scalar displacements, but the first two components retain only a small fraction of the original geometry. Apparent clusters or directions in this plane are therefore descriptive views of a lossy projection, not complete maps of semantic movement. The chart is most useful for showing that displacement is multidirectional and heterogeneous; the scalar cosine and Euclidean measurements remain the primary evidence for magnitude.

## A polar projection makes the component-level change inspectable

The experiment dashboard also includes radar charts. This report preserves that chart type as an inspection view rather than treating the enclosed polygon area as a metric. Figure 7 selects the passage with the largest observed five-language terminal cosine range, <em>Meditations</em>, the Marcus Aurelius passage, by a stated rule, then overlays its 100% and 12.5% states. It fits PCA to all 240 standardized compression-run embeddings and plots the first eight component scores; the angular labels are therefore PCA coordinates, not independent semantic dimensions. The figure makes the directional changes in one high-spread trajectory set available without substituting a visual impression for the run's original-space cosine and Euclidean measurements.

{{ plot(path="charts/compression-radar-projection.html", ratio="700 / 620", title="PCA radar projection for the widest terminal spread", caption="Figure 7. The passage with the largest five-language range in 12.5% cosine-to-anchor values (the Marcus Aurelius Meditations passage); 100% and 12.5% embeddings for all five languages are shown on the first eight PCA component axes. PCA is fitted on all 240 standardized compression-run embeddings, so this is a lossy directional display: polygon area and component axes are not semantic measures. Source: embeddings.parquet and metrics.parquet, run 2026-08-07T164304, multilingual-e5-large 1.0.0, 10 plotted embeddings.") }}

## Exceptions, uncertainty, and inference boundary

Fifty-nine of the 60 text-language sequences show strictly decreasing cosine similarity at every shorter state. The exception is Chinese human equality: cosine similarity falls from 0.972573 at 50% to 0.924538 at 25%, then rises to 0.933043 at 12.5%. A shorter generated variant can therefore land closer to its anchor in embedding space. Monotonic loss is a strong aggregate pattern in this run, not a mechanical property of the metric.

Several limitations constrain interpretation:

- There is one generated variant per text-language-level condition. No within-condition generation variance is measured.
- There are twelve passages, unevenly distributed across seven categories; category-level estimates would be underpowered and composition-sensitive.
- All measurements use one multilingual embedding model. A model-specific language calibration could contribute to the observed ordering.
- Target percentages rely on language-dependent length conventions and do not equate information removed across English, Italian, Chinese, Japanese, and Danish.
- Cosine and Euclidean geometry capture model representation, not human judgments of factual retention, entailment, style, or readability.
- The protocol combines translation history, passage content, prompt behavior, and language. It does not identify any of them as a causal mechanism.

The most defensible conclusion is consequently narrow: for this fixed corpus, generated variant set, prompt, and embedding model, stronger target compression is associated with greater same-language anchor displacement; the amount and timing of displacement vary across languages and passages; and the intermediate trajectories are substantially longer than their direct endpoint distances. Establishing a language-intrinsic advantage would require repeated generations, verified realized compression, human semantic evaluation, balanced texts, and replication across embedding models.

## Reproducibility and provenance

The chart suite is generated directly from the immutable <code>metrics.parquet</code> and <code>embeddings.parquet</code> tables by the experiment showcase builder. The export index records source row counts, aggregation rules, PCA basis, explained variance, run ID, model, and source git commit <code>35a18c0…1df7</code>. No file under the run directory is modified.

<ul class="source-links"><li><a href="https://github.com/minimagate/geometry-of-meaning/blob/main/experiments/semantic_preservation/cross_lingual_compression/README.md">Experiment protocol</a></li><li><a href="https://github.com/minimagate/geometry-of-meaning/blob/main/notebooks/semantic_preservation/cross_lingual_compression.ipynb">Objective observation notebook</a></li><li><a href="https://github.com/minimagate/geometry-of-meaning/tree/main/runs/semantic_preservation/cross_lingual_compression/2026-08-07T164304">Immutable source run</a></li><li><a href="https://github.com/minimagate/geometry-of-meaning/blob/main/runs/semantic_preservation/cross_lingual_compression/2026-08-07T164304/summary.json">Run summary</a></li><li><a href="https://github.com/minimagate/geometry-of-meaning/blob/main/scripts/showcases/semantic_preservation/cross_lingual_compression/build.py">Reproducible chart builder</a></li></ul>
