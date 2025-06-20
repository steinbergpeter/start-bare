import {
  BoldItalicUnderlineToggles,
  headingsPlugin,
  imagePlugin,
  InsertImage,
  InsertThematicBreak,
  listsPlugin,
  ListsToggle,
  quotePlugin,
  Separator,
  thematicBreakPlugin,
  toolbarPlugin,
  UndoRedo,
} from '@mdxeditor/editor';

function Toolbar() {
  return (
    <div className='flex items-center justify-between gap-2 mx-auto'>
      <UndoRedo />
      <Separator />
      <BoldItalicUnderlineToggles />
      <Separator />
      <ListsToggle />
      <Separator />
      <InsertThematicBreak />
      <Separator />
      <InsertImage />
    </div>
  );
}

export const plugins = [
  toolbarPlugin({
    toolbarContents: () => <Toolbar />,
  }),
  headingsPlugin({
    allowedHeadingLevels: [1, 2, 3, 4, 5, 6],
  }),
  listsPlugin({
    allowedListTypes: ['ul', 'ol', 'task-list'],
  }),
  quotePlugin(),
  thematicBreakPlugin(),
  imagePlugin(),
];
