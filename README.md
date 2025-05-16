<script src="{{ '/assets/js/costAnalysis.js?v=' | append: site.github.build_revision | relative_url }}"></script>

Govenor Tim Walz has propsed ending a Minnesota state subsidy of private school education[^1]. The existing subsidy amounts to $1,140 per private school student per year and totals $109 million each year[^1]. The state of Minnesota currently pays $7,281 per public school student per year[^2].

**Assumption:** Each student that moves from a private school to a public school costs the state an additional $6,141 (= $7,281 - $1,140).

**Assumption:** If private schools lost the $1,140 subsidy, they would need to increase tuition to compensate.

**Assumption:** If private schools increased their tuition by $1,140, some parents would choose to send their kids to public school rather than incur the additional cost.

**Question:** If the assumptions are true, how many private school students would need to switch to a public school in order for the increased cost of students in public schools to outweigh the elimination of the subsidy?
<br>
**Answer:** **17,750** ($6,141 increased cost x 17,750 students = $109,002,750)

**Question:** How many private school students are there in Minnesota?
<br>
**Answer:** $109,000,000 total subsidy / $1,140 cost per student = **95,614** private school students in Minnesota currently.

**Question:** What percentage of Minnesota private school students is 17,750?
<br>
**Answer:** **18.6%** = 17,750 / 95,614

**Question:** If the assumptions are true, would 18.6% of private school students in Minnesota switch to a public school?
<br>
**Answer:** Unknown. Whether or not this is _likely_ is left as an exercise for the reader.

<br>
<span id="outputMathText"></span>% of the children currently in private schools switching to a public school would result in a net <span id="costAnalysis"></span> for the state.

<input type="range" id="studentsMoving" step="0.1" min="0" max="25" oninput="updateText(this.value);">

### Sources:
[^1]: [https://www.cbsnews.com/minnesota/news/gov-tim-walz-taxpayer-funded-subsidies-private-schools/?intcid=CNM-00-10abd1h](https://www.cbsnews.com/minnesota/news/gov-tim-walz-taxpayer-funded-subsidies-private-schools/?intcid=CNM-00-10abd1h)
[^2]: [https://www.kttc.com/2025/03/28/digging-deeper-current-funding-formula-minnesotas-public-schools/](https://www.kttc.com/2025/03/28/digging-deeper-current-funding-formula-minnesotas-public-schools/)
