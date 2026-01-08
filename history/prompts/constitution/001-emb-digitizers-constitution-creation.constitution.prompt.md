---
id: 001
title: EMB Digitizers Constitution Creation
stage: constitution
date: 2025-12-30
surface: agent
model: claude-opus-4-5-20251101
feature: none
branch: 001-phase1-website
user: TOSHIBA
command: /sp.constitution
labels: ["constitution", "governance", "standards", "architecture"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  - No placeholder tokens remaining
  - All 10 principles documented
  - Version metadata complete
---

## Prompt

Project Overview:
- Website: embdigitizers.com
- Phase 1 Goal: Marketing & lead generation
- Reference: https://prodigitizing.com/
- Tech Stack: Next.js (App Router), TypeScript, Tailwind CSS
- Excluded (Phase 1): Authentication, Payment, Admin Dashboard, Order Upload

Purpose of Constitution:
Define rules, constraints, and standards for agents, subagents, skills, components, pages, and tasks. Ensure all future phases follow a consistent architecture and coding style.

User provided 10 principle areas:
1. Folder & File Naming Rules
2. Coding Standards (TypeScript)
3. Tailwind CSS Standards
4. Agent / Subagent / Skill Rules
5. Component Rules
6. Page & Section Rules
7. Phase 1 Constraints
8. UX & Design Rules
9. Registry & Workflow Rules
10. Examples (ServiceCardProps, SalesAgent)

## Response snapshot

Created comprehensive EMB Digitizers Constitution v1.0.0 with:

**10 Core Principles:**
- I. Naming Conventions (kebab-case folders, PascalCase components)
- II. TypeScript Standards (strict mode, no `any`, typed interfaces)
- III. Tailwind CSS Standards (mobile-first, consistent spacing/colors)
- IV. Component Architecture (typed props, reusability, semantic HTML)
- V. Agent/Subagent/Skill Architecture (BaseAgent, BaseSubAgent, BaseSkill)
- VI. Page & Section Architecture (6 pages, section components)
- VII. Phase 1 Constraints (static content, excluded features)
- VIII. UX & Accessibility Standards (WCAG 2.1 AA)
- IX. Registry & Workflow Standards (centralized registries)
- X. Simplicity & YAGNI (minimum viable implementation)

**Additional Sections:**
- Technology Stack (Next.js 14+, TypeScript 5.x, Tailwind CSS 3.4+)
- Development Workflow (branch strategy, commit standards, quality gates)
- Governance (amendment process, version policy, compliance)

**Sync Impact Report:**
- Version: 0.0.0 → 1.0.0 (MAJOR: Initial creation)
- Templates verified compatible: plan-template.md, spec-template.md, tasks-template.md
- No follow-up TODOs

## Outcome

- Impact: Established authoritative governance document for EMB Digitizers project
- Tests: All placeholder tokens replaced, principles documented
- Files: .specify/memory/constitution.md (368 lines)
- Next prompts: Reference constitution in all future development decisions
- Reflection: Constitution provides clear, testable standards for consistent development

## Evaluation notes (flywheel)

- Failure modes observed: None - constitution created successfully
- Graders run and results (PASS/FAIL): Template validation PASS
- Prompt variant (if applicable): Standard /sp.constitution workflow
- Next experiment (smallest change to try): N/A - constitution is foundational document
