#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import yaml

## Collect all the projects
projects = []
for file in os.listdir('./'):
    if not file.endswith('.yaml'):
        continue
    with open('./%s' % file, "r") as f:
        contents = f.read()
        projects.append({
            "when": contents.split('\n')[0].replace('date: ', ''),
            "data": yaml.load(contents)
        })

for project in projects:
    data = project['data']

    contents = "---\nlayout: post\n"
    if 'title' in data:
        title = data['title'].strip()
        contents += 'title: Student Project &ndash; %s\n' % title
    if 'brief' in data:
        contents += 'brief: %s\n' % data['brief'].strip()
    contents += '---\n\n'

    if 'media' in data:
        contents += '%s\n' % data['media'].strip()
    if 'image' in data:
        contents += '<img src="/images/%s"/>\n' % data['image'].strip()
    if 'description' in data:
        contents += data['description']

    data['slug'] = data['slug'].replace('_', '-')
    filename = "%s-%s.html" % (project['when'], data['slug'])

    with open("../_posts/%s" % filename, "w") as hfile:
        hfile.write(contents.encode('utf-8'))
