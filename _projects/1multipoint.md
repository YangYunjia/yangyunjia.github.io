---
layout: page
title: Multipoint optimization for supercritical airfoils   
description: Reliably speeding up multipoint aerodynamic optimization
img: assets/img/multipoint.jpg
importance: 1
category: work
related_publications: true
---

**Key Words:** multipoint aerodynamic optimization, surrogate model, uncertainty quantification

---
**INFO**

- Jan. 2020 — Dec. 2024
- supported by the Natural Science Foundation of China (NSFC) No. 92052203

---

In this project, we built a **Prior-based** multi-fidelity aerodynamic optimization framework for the multipoint performance of supercritical airfoils. 
The key idea is to evaluate design-point performance with CFD, and the off-design points with pretrained machine-learning models. 
Considering the speed of ML model only slightly scale with the number of off-design points, the framework should optimize multipoint performance in a similar 
speed of single-point optimization. 

In addition, the CFD-simulated design-point flow field can be a good prior when predicting the off-design point flow field with the model. By introducing
such prior, the generalization ability of the pretrained model should be improved. This is very favorable for surrogate-base optimization, where we want
to amortize the training cost by reusing the model in different optimization cases.

The project is in three steps:

1. Building the model to predict off-design point flow fields with a prior of the design point CFD result, and verifying the advantage of this on generalization ability.

    This lead to the paper: {% reference yang_flowfield_2022 %}

2. Applying the model in a multi-fidelity optimization framework, and verifying it in transonic buffet optimization.

    This lead to the paper: {% reference yang_fast_2024 %}

3. Further develop a uncertainty-aware framework to improve optimization results.

The dataset and codes are available on [GitHub](https://github.com/YangYunjia/floGen)
