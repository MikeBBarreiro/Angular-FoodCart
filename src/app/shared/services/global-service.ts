import { Service, signal } from '@angular/core';

@Service()

export class GlobalService {
    // 1. Create a reactive signal to hold the data globally. 
    // It starts as 'null' until the weather page populates it.
    public sharedWeatherData = signal<any>(null);
    
    // 2. A clean method that the weather page can call to dump the data
    public setWeatherPageData(data: any): void {
        this.sharedWeatherData.set(data);
    }

}
