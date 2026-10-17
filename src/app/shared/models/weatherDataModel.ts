// export class weatherModel{

//     // id!:number;
//     // name!:string;
//     // price!:number;
//     // tags?:string[];
//     // favorite:boolean = false;
//     // stars:number = 0;
//     // origins!:string[];
//     // imageUrl!:string;
//     // cookTime!:string;

//     lat!:number;
//     lon!:number;
//     timezone!: string;
//     timezone_offset!:number;
//     data!:weatherDetailsModel[];
//     weather!:weatherBasicsModel[];
//     alerts!:string[];
// }

// export class weatherDetailsModel{
//     dt!:number;
//     sunrise!: number;
//     sunset!: number;
//     temp!: number;
//     feels_like!: number;
//     pressure!: number;
//     humidity!: number;
//     dew_point!: number;
//     uvi!: number;
//     clouds!: number;
//     visibility!: number;
//     wind_speed!: number;
//     wind_deg!: number;

// }

// export class weatherBasicsModel{
//     id!: number;
//     main!: string;
//     description!: string;
//     icon!: string;
// }

export class weatherModel{
    coord!:coord;
    weather!:weather[];
    base!:string;
    main!:main;
    visibility!:number;
    wind!:wind;
    rain!:rain;
    clouds!:clouds;
    dt!:number;
    sys!:sys;
    timezone!: number;
    id!: number;
    name!: string;
    cod!: number;
}

export class coord{
    lon!:number;
    lat!:number;
}

//an array
export class weather{
    id!:number;
    main!:string;
    description!:string;
    icon!:string;
}

export class main{
    temp!: number;
    feels_like!: number;
    temp_min!: number;
    temp_max!: number;
    pressure!: number;
    humidity!: number;
    sea_level!: number;
    grnd_level!: number;
        //this is an attempt to convert to from kilven to F within the model, this isnt working, however keeping for future reference.
    //we are at the momment converting in the html template.
    // get tempKilvenToFahrenheit(): number{
    //     return (this.temp - 273.15) * (9/5) + 32;
    // }

}

export class wind{
    speed!:number;
    deg!:number;
    gust!:number;
}

export class rain{
    "1h"!:number;
}

export class clouds{
    all!:number;
}

export class sys{
    type!: number;
    id!: number;
    country!: number;
    sunrise!: number;
    sunset!: number;
}


