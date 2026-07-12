---
title: Simple salt exchanges
tags: [salt, chemistry]
---

One of the first ideas that is learnt in chemistry is a salt exchange reaction. 

Let's think about the following reaction: 
2NaOH + CaCl<sub>2</sub> → Ca(OH)<sub>2</sub> + NaCl

Reaction progression is visible here as the calcium hydroxide will precipitate in solution. This idea applies to all ionic species: the salts will exchange counterions.

If both salts are soluble, the ions will remain dissolved and neither product will really form. However, if one of the potential products is insoluble, then it will preferentially form and drop out of the solution. Of course this is a very general statement and in some cases, the insoluble product can back react with other reactants - but let's not discuss that yet.

I used this often in my PhD to exchange various salts: primarily sodium for tetrabutylammonium. This phenomenon is also great to determine if reactions have completed and I will explain how I used this here.

During my PhD, I performed electrochemical characterisations of thin films with either sodium chloride in water or tetrabutylammonium hexafluorophoshate (TBAPF<sub>6</sub>, organic) in acetonitrile. In October 2021, I ran out of TBAPF<sub>6</sub>. The alternative is to use TBAClO<sub>4</sub> or TBABF­<sub>4</sub> analogue. However, I wanted to keep all my work consistent (it would look weird in my thesis if I suddenly changed the electrolyte because "we ran out"). 

TBAPF<sub>6</sub> online is $650 for 100g or $952 for electrochemical grade, which in the scheme of science, isn’t too bad. But it is still money that we do not have at my institute. So instead, I synthesized it from products that we already have in the lab.

We had a large amount of tetrabutylammonium bromide (TBABr) and potassium hexafluorophosphate (KPF<sub>6</sub>). Each of these costs outweighed the price of TBAPF<sub>6</sub> from a store like sigma-aldrich.

![salt exchange reaction](../imgs/saltexch1.png)
**Figure 1.** Salt exchange reaction to yield TBAPF<sub>6</sub>

**Experimental:** TBABr and KPF<sub>6</sub> 1:1 was combined in 1:1 water/dichloromethane (DCM) and mixed for 2 hours – until both solutions were clear. The organic layer was collected, dried with MgSO<sub>4</sub>, filtered, and evaporated to yield white crystals that were recrystallized with ethanol and filtered to yield needle-like crystals 85% yield.

Some notes of the reaction: (1) initially, the DCM solution was a pinkish colour à which turned clear. (2) When I spotted on TLC and stained with iodine, the TBABr was red compared to yellow for other compounds.

It is tricky to determine if the reaction was complete as the TBA cation does not change (so I cannot use NMR). I performed LCMS for both the TBABr and TBAPF<sub>6</sub>. Both salts had the same cationic spectra, which is expected. The PF<sub>6</sub> gave a peak at 144 which corresponds to the molar mass of PF<sub>6</sub>, yet Br<sup>-</sup> gave a peak at 146. I could not trust this data.

After a tutoring session, I realized that I could test the presence of bromide by adding silver nitrate. If bromide is present, then AgBr will crash out as it is not water soluble. Thus, I tried it. I added either TBABr or TBAPF<sub>6</sub> to an aqueous solution of AgNO<sub>3</sub> + HNO<sub>3</sub>. I observed that the TBABr went a yellw/cream colour with precipitate, while the PF<sub>6</sub> did not change.

![precipitation reaction](../imgs/saltexch2.png)

**Figure 2.** Precipitation reactions of (a) TBABr and (b) TBAPF<sub>6</sub>with AgNO<sub>3</sub>

Since Oct 2021, I have been using this electrolyte and it has been working very well.

The analytical chemist also performed Raman spectroscopy for me. PF<sub>6</sub> contains a typical vibration between 745 and 750 cm<sup>-1</sup> which is very strong and has been reported previously.[1] People have also reported strong stretching vibrations of PF6 at 950-800 cm<sup>-1</sup>, 845-833 cm<sup>-1</sup> for PF6 anion. 


**References**
[1] Socrates, G., Infrared and Raman Characteristic Group Frequencies:  Tables and Charts. 3. 3 ed. 2002, Chichester, West Sussex, England: J. Wiley and Sons. 348.