// global.d.ts
declare var google: {
  script: {
    run: {
      withSuccessHandler: (callback: (response: any) => any) => {
        withFailureHandler: (callback: (error: any) => any) => {
          [key: string]: any;
        };
      };
    };
  };
};
