// global.d.ts
declare var google: {
  script: {
    run: {
      withSuccessHandler: (callback: (response: T) => T) => {
        withFailureHandler: (callback: (error: T) => T) => {
          [key: string]: T;
        };
      };
    };
  };
};
