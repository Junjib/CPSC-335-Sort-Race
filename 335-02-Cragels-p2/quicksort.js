class Quicksort
{
    constructor(input)
    {
        this.p = 0;
        this.i = 1;
        this.j = input.length - 1;
        this.arr = input;
        this.partitions = [];
        this.partitions.push(this.arr);
    }

    getArray()
    {
        return this.arr;
    }

    swap()
    {
        var temp;
        if(this.i < this.j)
        {
            temp = this.partitions[0][this.i];
            this.partitions[0][this.i] = this.partitions[0][this.j];
            this.partitions[0][this.j] = temp;
        }
        else if(this.i > this.j || this.partitions[0][this.i] == this.partitions[0][this.j])
        {
            temp = this.partitions[0][this.j];
            this.partitions[0][this.j] = this.partitions[0][this.p];
            this.partitions[0][this.p] = temp;
        }
    }

    step()
    {
        if(this.partitions[0].length == 1 || this.partitions[0].length == 0)
        {
            this.partitions.shift();
            console.log("partitions[0] popped");
        }
        if(this.partitions.length == 0)
        {
            return 0;
        }
        if(this.i > this.j)
        {
            this.swap();
            console.log("j: ", this.j);
            this.createPartition();
            this.partitions.shift();
            console.log("partitions[0]: ", this.partitions[0]);
            if(this.partitions.length == 0)
            {
                return 0;
            }
            else
            {
                this.i = 1;
                this.j = this.partitions[0].length - 1;
            }
            console.log("partitions list: ", this.partitions);
        }

        if(this.partitions[0][this.i] >= this.partitions[0][this.p] && this.partitions[0][this.j] <= this.partitions[0][this.p])
        {
            this.swap();
            this.i++;
            this.j--;
            return 1;
        }
        else if(this.partitions[0][this.i] >= this.partitions[0][this.p])
        {
            this.j--;
            return 2;
        }
        else if(this.partitions[0][this.j] <= this.partitions[0][this.p])
        {
            this.i++;
            return 2;
        }
        else
        {
            this.i++;
            this.j--;
            return 2;
        }
    }

    createPartition()
    {
        if(this.j > 0 && this.j < (this.partitions[0].length - 1))
        {
            var count = (this.j+1);
            var lowerPartition = [];
            for(var i = 0; i < this.j; i++)
            {
                lowerPartition[i] = this.partitions[0][i];
            }
            console.log("lowerPartition: ", lowerPartition);
            this.partitions.push(lowerPartition);
            var upperPartition = [];
            for(var i = 0; i < (this.partitions[0].length-this.j-1); i++)
            {
                upperPartition[i] = this.partitions[0][count];
                count++;
            }
            console.log("upperPartition: ", upperPartition);
            this.partitions.push(upperPartition);
        }
        else
        {
            var partition = [];
            if(this.j == 0)
            {
                var count1 = (this.j+1);
                for(var i = 0; i < this.partitions[0].length-1; i++)
                {
                    partition[i] = this.partitions[0][count1];
                    count1++;
                }
                this.partitions.push(partition);
            }
            else if(this.j == (this.partitions[0].length-1))
            {
                for(var i = 0; i < this.j; i++)
                {
                    partition[i] = this.partitions[0][i];
                }
                this.partitions.push(partition);
            }
            console.log("partition: ", partition);
        }
    }
}