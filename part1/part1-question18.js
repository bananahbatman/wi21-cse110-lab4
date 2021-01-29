
let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};


for( const key in statistics)
{
    if (key.substring(0,1) == 'r')
    {
        console.log(key);
    }
    else if (statistics[key] % 2 == 1 )
    {
        console.log(key);
    }
    
}
