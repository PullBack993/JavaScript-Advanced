class Company{
    constructor(){
        this.departments = []
    }
    addEmployee(name, salary, position, department){
       if (!name || salary < 0 || !position || !department || !salary){
           throw Error ("Invalid input!")
       }
       if (!this.departments[department]){
           this.departments[department] = []
       }
       this.departments[department].push({name,salary,position})
       console.log(this.departments[department])
       return (`New employee is hired. Name: ${name}. Position: ${position}`)

    }
    bestDepartment(){
        let bestDepartment = {
            name: '',
            avgSalary: 0
        }

        for (const key in this.departments) {
              let totalSalary = 0
            for (const employe in this.departments[key]) {
                totalSalary += this.departments[key][employe].salary
            
            }
            let departmentAvg = totalSalary / this.departments[key].length
            if (departmentAvg > bestDepartment.avgSalary){
                bestDepartment.name = key
                bestDepartment.avgSalary = departmentAvg
             
            }
        }
        this.departments[bestDepartment.name].sort((a,b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name)
        })

        let output = ""
        output += `Best Department is: ${bestDepartment.name}\n`
        output += `Average salary: ${bestDepartment.avgSalary.toFixed(2)}\n`

        for (let i = 0; i < this.departments[bestDepartment.name].length; i++) {
            let employe = this.departments[bestDepartment.name][i]
            output += `${employe.name} ${employe.salary} ${employe.position}\n`
        }    
        
        
        return output.trim()
        
    }

}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
// console.log(c.bestDepartment());
