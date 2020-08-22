export const ACTIONS = {
    GET_BREW: "get-brew",
    ADD_BREW: "add-brew",
    TOGGLE_BREW: "toggle-brew",
    DELETE_BREW: "delete-brew",
  };
  export const MESSAGE = {
    GET_BREW:'',
    ADD_BREW:'Brew added!',
    EDIT_BREW:'Brew saved!',
    DELETE_BREW:'Brew deleted.',
    UPDATE_SETTINGS:'Settings saved!'
  }
  export const PAGES = {
    BREWS:"brews"
  }
  export const reducer = (brews, action) => {
    switch (action.type) {
      case ACTIONS.GET_BREW:
        return action.payload
      case ACTIONS.ADD_BREW:
        return [ ...brews, action.payload];
      case ACTIONS.TOGGLE_BREW:
        return brews.map((brew) => {
          if (brew.id === action.payload) {
            return { ...brew, complete: !brew.complete };
          }
          return brew;
        });
      case ACTIONS.DELETE_BREW:
        return brews.filter((brew) => brew.id !== action.payload);
      default:
        return brews;
    }
  };
  
  export const INITIAL_BREWS = []
  
  export const testBrews = [
    {
      stage: 1,
      generalInfo: {
        name: "Thanksgiving 2018",
        batchSize: "5 Kegs",
        batchType: "Beer",
        batchNumber: "1",
        ibu: "10",
        srm: "7",
        abv: "8",
        originalGravity: "1.05",
        finalGravity: "1.01",
        brewingDate: "10/1/2018",
        dateSecondary: "10/15/2018",
        dateBottling: "11/15/2018",
      },
      ingredients: ["Water", "Yeast", "Hops", "Malt", "Other"],
      brewingNotes: "First brew in the home setup",
      hopsNotes: "Smelly",
      yeastNotes: "Perfectly Fermented",
      fermentationNotes: "Just as expected",
      keggingNotes: "Filled freezer behind bar",
      tastingNotes: {
        appearance: "Golden",
        aroma: "Hoppy",
        flavor: "Crisp",
        bitterness: "6/10",
        consumerRating: "8/10",
      },
      additionalNotes: "Next year less hops - make more kegs!",
    },
    {
      stage: 1,
      generalInfo: {
        name: "test 2",
        batchSize: "test 2",
        batchType: "test 2",
        batchNumber: "test 2",
        ibu: "test 2",
        srm: "test 2",
        abv: "test 2",
        originalGravity: "0.0",
        finalGravity: "0.0",
        brewingDate: "test 2",
        dateSecondary: "test 2",
        dateBottling: "test 2",
      },
      ingredients: ["test2", "test2", "test2", "test2"],
      brewingNotes: "test 2",
      hopsNotes: "test 2",
      yeastNotes: "test 2",
      fermentationNotes: "test 2",
      keggingNotes: "test 2",
      tastingNotes: {
        appearance: "test 2",
        aroma: "test 2",
        flavor: "test 2",
        bitterness: "test 2",
      },
      additionalNotes: "test 2",
    },
  ];
  
  export const formData = {
    stage: 1,
    generalInfo: {
      name: "",
      batchSize: "",
      batchType: "",
      batchNumber: "",
      ibu: "",
      srm: "",
      abv: "",
      originalGravity: "0.0",
      finalGravity: "0.0",
      brewingDate: "",
      dateSecondary: "",
      dateBottling: "",
    },
    ingredients: ["", "", ""],
    brewingNotes: "",
    hopsNotes: "",
    yeastNotes: "",
    fermentationNotes: "",
    keggingNotes: "",
    tastingNotes: {
      appearance: "",
      aroma: "",
      flavor: "",
      bitterness: "",
    },
    additionalNotes: "",
  };
  