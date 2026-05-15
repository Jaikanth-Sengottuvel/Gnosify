# Graph Report - src  (2026-05-15)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 153 nodes · 172 edges · 19 communities (9 shown, 10 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d8fe4f8e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]

## God Nodes (most connected - your core abstractions)
1. `POST()` - 4 edges
2. `getServiceBySlug()` - 4 edges
3. `getAllSlugs()` - 3 edges
4. `checkRateLimit()` - 2 edges
5. `isValidEmail()` - 2 edges
6. `escapeHtml()` - 2 edges
7. `generateStaticParams()` - 2 edges
8. `generateMetadata()` - 2 edges
9. `ServicePage()` - 2 edges
10. `ServiceData` - 2 edges

## Surprising Connections (you probably didn't know these)
- `generateStaticParams()` --calls--> `getAllSlugs()`  [EXTRACTED]
  app/services/[slug]/page.tsx → lib/services-data.ts
- `generateMetadata()` --calls--> `getServiceBySlug()`  [EXTRACTED]
  app/services/[slug]/page.tsx → lib/services-data.ts
- `ServicePage()` --calls--> `getServiceBySlug()`  [EXTRACTED]
  app/services/[slug]/page.tsx → lib/services-data.ts

## Communities (19 total, 10 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.07
Nodes (10): metadata, faqs, sections, fadeUp, projects, fadeUpVariant, services, techs (+2 more)

### Community 1 - "Community 1"
Cohesion: 0.12
Nodes (7): cultureValues, fadeInUp, hiringSteps, openings, perks, faqs, navLinks

### Community 2 - "Community 2"
Cohesion: 0.11
Nodes (10): coreValues, differentiators, fadeInUp, processSteps, services, stats, GRADIENT_WORDS, slides (+2 more)

### Community 3 - "Community 3"
Cohesion: 0.17
Nodes (4): categories, categoryColors, posts, serviceLinks

### Community 4 - "Community 4"
Cohesion: 0.18
Nodes (3): inter, metadata, organizationSchema

### Community 5 - "Community 5"
Cohesion: 0.33
Nodes (7): getAllSlugs(), getServiceBySlug(), ServiceData, servicesData, generateMetadata(), generateStaticParams(), ServicePage()

### Community 6 - "Community 6"
Cohesion: 0.29
Nodes (4): capabilities, Capability, fadeUpVariant, staggerContainer

### Community 7 - "Community 7"
Cohesion: 0.29
Nodes (3): fadeUpVariant, services, metadata

### Community 8 - "Community 8"
Cohesion: 0.43
Nodes (6): checkRateLimit(), escapeHtml(), isValidEmail(), POST(), rateLimitMap, resend

## Knowledge Gaps
- **56 isolated node(s):** `inter`, `metadata`, `organizationSchema`, `metadata`, `metadata` (+51 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `inter`, `metadata`, `organizationSchema` to the rest of the system?**
  _56 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.07 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._