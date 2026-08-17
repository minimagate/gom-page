+++
title = "Canonical passages v0.1.0"
description = "The twelve multilingual public-domain passages shared by the semantic-preservation experiments."
date = 2026-08-03
+++

The `canonical_passages` corpus contains 12 passages across novels, drama, science, philosophy, poetry, politics, and autobiography. Each source has a stable text identifier, a canonical original, metadata, and translations in the project languages.

It is the common input for the translation baseline and cross-lingual compression experiments. Changes to canonical content or membership are versioned independently from experimental variants and runs.

## Entries

<div class="table-wrap"><table><thead><tr><th>Text ID</th><th>Work</th><th>Category</th><th>Original language</th></tr></thead><tbody>
<tr><td><code>darwin_natural_selection</code></td><td>On the Origin of Species, Natural Selection</td><td>scientific</td><td>en</td></tr>
<tr><td><code>declaration_human_equality</code></td><td>Declaration of Independence, Human Equality and the Right of Revolution</td><td>political</td><td>en</td></tr>
<tr><td><code>descartes_methodic_doubt</code></td><td>Discourse on the Method, Methodic Doubt and the Cogito</td><td>philosophy</td><td>fr</td></tr>
<tr><td><code>douglass_learning_to_read</code></td><td>Narrative of the Life of Frederick Douglass, Learning to Read</td><td>autobiography</td><td>en</td></tr>
<tr><td><code>einstein_special_relativity</code></td><td>On the Electrodynamics of Moving Bodies, Opening</td><td>scientific</td><td>de</td></tr>
<tr><td><code>hamlet_to_be_or_not_to_be</code></td><td>Hamlet, “To be, or not to be”</td><td>drama</td><td>en</td></tr>
<tr><td><code>invictus</code></td><td>Invictus</td><td>poetry</td><td>en</td></tr>
<tr><td><code>marcus_aurelius_control_and_judgment</code></td><td>Meditations, On Judgment, Kinship, and Cooperation</td><td>philosophy</td><td>grc</td></tr>
<tr><td><code>metamorphosis_opening</code></td><td>The Metamorphosis, Opening</td><td>novel</td><td>de</td></tr>
<tr><td><code>odyssey_opening_invocation</code></td><td>The Odyssey, Opening Invocation</td><td>poetry</td><td>grc</td></tr>
<tr><td><code>pride_and_prejudice_opening</code></td><td>Pride and Prejudice, Opening</td><td>novel</td><td>en</td></tr>
<tr><td><code>wollstonecraft_womens_education</code></td><td>A Vindication of the Rights of Woman, On Education and Reason</td><td>philosophy</td><td>en</td></tr>
</tbody></table></div>

## Generated variants

<div class="table-wrap"><table><thead><tr><th>Experiment</th><th>Languages</th><th>States per text-language</th><th>Records</th></tr></thead><tbody>
<tr><td>Translation embedding baseline</td><td>en, it, zh, ja, da</td><td>1 unchanged anchor</td><td>60</td></tr>
<tr><td>Cross-lingual compression</td><td>en, it, zh, ja, da</td><td>4: 100%, 50%, 25%, 12.5%</td><td>240</td></tr>
</tbody></table></div>

<ul class="source-links">
  <li><a href="https://github.com/minimagate/geometry-of-meaning/tree/main/data/corpora/canonical_passages/v0.1.0">Corpus files and metadata</a></li>
  <li><a href="https://github.com/minimagate/geometry-of-meaning/tree/main/data/variants/semantic_preservation">Generated semantic-preservation variants</a></li>
</ul>
