define([
    "src/menubar",
    "less!src/stylesheets/menubar.less"
    ], function(MenuBar) {

        var menuGroups = [
            {
                label: "Help",
                items: [
                    {
                        label: "About",
                        icon: "file-code-o",
                        cmd: "application.about"
                    },
                    {
                        label: "Release Changes",
                        icon: "file-code-o",
                        cmd: "application.changes"
                    },
                    {
                        type: "divider"
                    },
                    {
                        label: "Upload",
                        type: "menu",
                        items: [
                            {
                                label: "Files",
                            },
                            {
                                label: "Folder",
                            }
                        ]
                    },
                    {
                        type: "divider"
                    },
                    {
                        label: "Refresh Tree",
                    }
                ]
            },
            {
                label: "View",
                items: [
                    {
                        label: "Files",
                    },
                    {
                        label: "Folder",
                    }
                ]
            },
        ];
        var bar = new MenuBar({
            groups: menuGroups
        });

        bar.appendTo(codebox.app.$el);
        bar.render();
        
});