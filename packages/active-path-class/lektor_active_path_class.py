# -*- coding: utf-8 -*-
from lektor.pluginsystem import Plugin

# -*- coding: utf-8 -*-
from lektor.pluginsystem import Plugin


class ActivePathClassPlugin(Plugin):
    name = 'active-path-class'
    description = u'return a classname if the current path matches a provided string'

    def on_process_template_context(self, context, **extra):
        def active_path_class(path, s, classname):
            return classname if path.startswith(s) else ''
        context['active_path_class'] = active_path_class
