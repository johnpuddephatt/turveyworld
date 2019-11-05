---
layout: layouts/project.njk
title: Projects
pagination:
  data: collections.projects
  size: 1
  reverse: true
  alias: project
permalink: project/{{ project.data.title | slug }}/index.html
---