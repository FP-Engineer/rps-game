import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';

const meta = {
	title: 'Label',
	component: Label,
	argTypes: {},
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LabelStory: Story = {
	args: {
		children: `
			Cake sesame snaps cookie danish brownie cotton candy gingerbread. Chocolate cake pie toffee muffin apple pie gingerbread. Jelly-o cake wafer fruitcake lemon drops donut pastry candy canes. Candy cupcake chocolate cake jelly gummies. Biscuit jujubes sesame snaps icing oat cake pastry donut jelly-o. Powder jelly beans apple pie sweet biscuit. Chocolate bar dessert tart cookie chupa chups sesame snaps bonbon. Soufflé fruitcake toffee gummi bears marzipan shortbread pie. Dragée chupa chups gummies tootsie roll jelly beans cookie soufflé. Caramels gummi bears soufflé jelly beans sugar plum. Sugar plum bear claw chocolate bar donut marshmallow tart chocolate cake wafer toffee. Jelly beans chocolate cake lollipop brownie pastry chocolate bar. Candy canes lollipop toffee cotton candy sweet roll. Croissant jelly beans brownie bonbon muffin gummies.

			Sesame snaps halvah bear claw gingerbread cookie pastry dessert chocolate bar. Tiramisu lemon drops gummi bears chocolate wafer. Chupa chups wafer soufflé powder dessert cheesecake powder gummi bears. Jelly-o oat cake sweet roll wafer chocolate bar cotton candy soufflé sweet roll cupcake. Cheesecake jelly beans jelly powder jujubes pastry fruitcake. Marshmallow caramels biscuit pastry danish gummi bears toffee. Topping jelly beans tiramisu liquorice lollipop macaroon jelly-o gingerbread. Cake gingerbread lemon drops jelly-o dessert. Ice cream sesame snaps fruitcake jelly-o lemon drops cupcake ice cream chocolate. Gummi bears topping cake donut chocolate bar. Oat cake gummi bears liquorice tiramisu cotton candy. Ice cream cupcake jelly-o wafer sesame snaps gingerbread gummi bears. Powder chupa chups dessert pastry bear claw topping brownie dragée.

			Cookie cookie gingerbread chupa chups biscuit. Sweet chocolate cake ice cream oat cake gingerbread macaroon tootsie roll bear claw candy canes. Sugar plum sweet roll sweet roll pie tootsie roll jujubes. Lemon drops chocolate cake soufflé sugar plum cupcake liquorice. Cake chocolate bar sweet roll brownie powder topping candy. Jelly-o macaroon fruitcake cake biscuit. Pudding chupa chups cotton candy danish lollipop. Cake marshmallow chocolate cake gingerbread brownie jelly beans caramels. Caramels ice cream liquorice wafer bear claw bear claw. Gummies candy sesame snaps chupa chups toffee sweet roll tootsie roll. Cookie gummies macaroon jujubes dessert sugar plum tart apple pie. Caramels fruitcake apple pie bonbon caramels soufflé sesame snaps carrot cake apple pie.

			Caramels caramels sweet roll muffin tootsie roll cake liquorice oat cake cake. Cookie oat cake oat cake sweet roll tootsie roll. Soufflé apple pie icing cotton candy jelly beans jelly beans. Gummies pudding chupa chups chocolate bar bear claw lemon drops muffin bonbon dessert. Toffee halvah candy canes gummies cake. Gingerbread jelly beans ice cream cotton candy liquorice. Pie oat cake sugar plum sesame snaps pudding sugar plum. Donut ice cream jelly-o cotton candy carrot cake tart jelly beans cotton candy chocolate bar. Candy cookie chupa chups powder icing. Gingerbread sugar plum cotton candy sesame snaps liquorice shortbread. Jelly-o macaroon liquorice candy canes bonbon liquorice oat cake. Brownie pudding bonbon sesame snaps powder wafer sesame snaps cotton candy. Cake ice cream liquorice cheesecake liquorice pie marzipan. Chocolate bar marzipan shortbread macaroon chocolate gingerbread candy caramels pastry.

			Gingerbread candy tootsie roll carrot cake wafer dessert chocolate liquorice dragée. Cotton candy danish halvah chupa chups sweet. Cotton candy biscuit icing wafer dragée. Brownie dragée gummi bears cake gingerbread bonbon gingerbread gummi bears. Icing muffin jelly beans candy canes chocolate oat cake tootsie roll pastry lollipop. Shortbread gummi bears shortbread donut cheesecake pie tiramisu toffee. Halvah wafer candy sesame snaps soufflé cupcake gummies. Croissant muffin tiramisu macaroon donut. Bonbon powder pudding halvah liquorice marshmallow chocolate cake cheesecake croissant. Macaroon icing bear claw cheesecake tart topping. Wafer cookie cookie chocolate toffee gummies cotton candy topping. Bonbon muffin dragée brownie sweet roll macaroon. Jelly beans cotton candy lemon drops tart chupa chups topping topping caramels chocolate bar.
		`,
	},
};