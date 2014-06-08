#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import yaml

## Collect all the projects
projects = []
for file in os.listdir('projects'):
    if not file.endswith('.yaml'):
        continue
    with open('projects/%s' % file, "r") as f:
        contents = f.read()
        projects.append({
            "when": contents.split('\n')[0].replace('date: ', ''),
            "contents": contents,
            "data": yaml.load(contents)
        })

## Order them by reverse chrono
projects = sorted(projects, key=lambda k: k['when'], reverse=True)

## Build the yaml file
output = ""
for project in projects:
    contents = project['contents'].replace('\n', '\n  ')
    output += "- %s\n\n" % contents

with open("projects.yaml", "w") as ofile:
    ofile.write(output)


for project in projects:
    data = project['data']

    contents = "---\nlayout: default\n"
    if 'title' in data:
        contents += 'title: %s\n' % data['title'].strip()
    if 'brief' in data:
        contents += 'brief: %s\n' % data['brief'].strip()
    contents += '---\n\n'

    if 'date' in data:
        contents += '<time>%s</time>' % data['date']
    if 'media' in data:
        contents += '%s\n' % data['media'].strip()
    if 'image' in data:
        contents += '<img src="/images/%s"/>\n' % data['image'].strip()
    if 'description' in data:
        contents += data['description']

    with open("../projects/%s.html" % data['slug'], "w") as hfile:
        hfile.write(contents.encode('utf-8'))
