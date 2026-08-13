+++
title = "Cross-lingual compression"
description = "Semantic displacement under progressive multilingual compression."
date = 2026-08-07

[extra]
kind = "semantic preservation"
+++

This experiment draws its source texts and canonical translations from the [Canonical passages v0.1.0 corpus](/data/canonical-passages/). It follows all 12 passages across five languages through four states: the complete text, then versions at 50%, 25%, and 12.5% of the source length. It measures how each embedding moves away from its uncompressed anchor.

The experiment defines a trajectory: every text-language pair starts at its unchanged anchor and moves through the same three compression levels. Results and visual analysis live in its observation.

<ul class="source-links">
  <li><a href="https://github.com/minimagate/geometry-of-meaning/tree/main/experiments/semantic_preservation/cross_lingual_compression">Protocol, generation, and analysis</a></li>
  <li><a href="/observations/compression-decay/">Run analysis and interactive charts</a></li>
</ul>
