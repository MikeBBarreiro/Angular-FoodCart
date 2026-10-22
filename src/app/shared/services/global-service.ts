import { Service, signal } from '@angular/core';

@Service()

export class GlobalService {
    // 1. Create a reactive signal to hold the data globally. 
    // It starts as 'null' until the weather page populates it.
    public sharedWeatherData = signal<any>(null, {
        // Custom equality check: only emits updates if the actual data changes, ignoring new object references in memory. This might not be neccisary but its good to know.
        // equal means, if somthing has changed between a and b, update the UI. 
        // only Incoming Value (New Data)  ──►  [ equal(oldValue, newValue) ]  ──►  True?  ──► Do absolutely nothing (Skip UI rendering)
                                                                //  ──►  False? ──► Trigger Effects & Update UI
        equal: (a, b) => JSON.stringify(a) === JSON.stringify(b)
    });
        
    // 2. A clean method that the weather page can call to dump the data
    public setWeatherPageData(data: any): void {
        this.sharedWeatherData.set(data);
    }

}
