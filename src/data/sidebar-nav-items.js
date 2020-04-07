export default function () {
  return [
    {
      title: "Add/Update Member",
      to: "/Home",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: "",
    },
    {
      title: "3 Touch Program",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/3Touch",
    },
    {
      title: "Articles",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/Tables",
    },
    {
      title: "Survey/Reviews",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/Survey",
    },
    {
      title: "Marketing",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/Marketing",
    },
    {
      title: "Reminders",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/Reminders",
    },
    {
      title: "Tools",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/Tools",
    },
  ];
}
