import { render, screen } from '@testing-library/react';
import App from './App';
import { CreateActivity } from './components/CreateActivity/CreateActivity';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



describe("<CreateActivity />", () => {
  const state = { activity: data.activity };
  const mockStore = configureStore([thunk]);
  const { GET_ACTIVITIES } = actions;

  beforeAll(() => expect(isReact.classComponent(CreateActivity)).toBeFalsy());

  // Si o si vas a tener que usar functional component! No van a correr ninguno de los tests si no lo haces!
  // También fijate que vas a tener que usar algunos hooks. Tanto de React como de Redux!
  // Los hooks de React si o si los tenes que usar "React.useState", "React.useEffect". El test no los reconoce
  // cuando se hace destructuring de estos métodos === test no corren.
  // describe("Estructura", () => {
  //   let CreateActivity;
  //   let store = mockStore(state);
  //   beforeEach(() => {
  //     CreateActivity = mount(
  //       <Provider store={store}>
  //         <MemoryRouter initialEntries={["/activities"]}>
  //           <CreateActivity />
  //         </MemoryRouter>
  //       </Provider>
  //     );
  //   });

    // it("Debería renderizar un form", () => {
    //   expect(createActivity.find("form")).toHaveLength(1);
    // });

    it('Debería renderizar un label con el texto "Nombre:"', () => {
      expect(createActivity.find("label").at(0).text()).toEqual("Nombre:");
    });

    // it('Debería renderizar un input con la propiedad "name" igual a "name"', () => {
    //   expect(createHouse.find('input[name="name"]')).toHaveLength(1);
    // });

    // it('Debería renderizar un label con el texto "Region: "', () => {
    //   expect(createHouse.find("label").at(1).text()).toEqual("Region: ");
    // });

    // it('Debería renderizar un input con la propiedad "name" igual a "region"', () => {
    //   expect(createHouse.find('input[name="region"]')).toHaveLength(1);
    // });

    // it('Debería renderizar un label con el texto "Words: "', () => {
    //   expect(createHouse.find("label").at(2).text()).toEqual("Words: ");
    // });

    // it('Debería renderizar un input con la propiedad "name" igual a "words"', () => {
    //   expect(createHouse.find('input[name="words"]')).toHaveLength(1);
    // });

    // it('Debería renderizar un button con "type" igual a "submit" y con texto "Create"', () => {
    //   expect(createHouse.find('button[type="submit"]')).toHaveLength(1);
    //   expect(createHouse.find("button").at(0).text()).toEqual("Create");
    // });
  }) ;
