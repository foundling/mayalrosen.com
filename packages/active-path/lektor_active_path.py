# -*- coding: utf-8 -*-
from lektor.pluginsystem import Plugin


class ActivePathPlugin(Plugin):
    name = 'active-path'
    description = u'Determine if the active path matches a provided string'

    def on_process_template_context(self, context, **extra):
        def active_path(path, s, true_rv,false_rv):
            if path.startswith(s):
                return true_rv
            else:
                return false_rv
        context['active_path'] = active_path
