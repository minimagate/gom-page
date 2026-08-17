+++
title = "Translation embedding baseline"
description = "The reference measurement for multilingual semantic distance."
date = 2026-08-04

[extra]
kind = "semantic preservation"
+++

Before testing transformation, the project measures translation alone. Its data source is the [Canonical passages v0.1.0 corpus](/data/canonical-passages/): twelve public-domain passages with stable originals, metadata, and canonical versions in English, Italian, Chinese, Japanese, and Danish. <a class="model-link" href="https://huggingface.co/intfloat/multilingual-e5-large" target="_blank" rel="noopener noreferrer"><code>multilingual-e5-large</code><span aria-hidden="true"> ↗</span><span class="sr-only"> (opens the Hugging Face model card in a new tab)</span></a> embeds each language version and compares the four non-English variants with the English reference.

The experiment establishes its reference condition rather than drawing conclusions: translation changes the representation before any further transformation is applied. Results and visual analysis live in its observation.

<ul class="source-links">
  <li><a href="https://github.com/minimagate/geometry-of-meaning/tree/main/experiments/semantic_preservation/translation_embedding_baseline">Protocol and analysis</a></li>
  <li><a href="/observations/translation-baseline/">Run analysis and interactive charts</a></li>
</ul>
