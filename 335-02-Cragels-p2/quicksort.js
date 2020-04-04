class Quicksort
{
    constructor(input)
    {
        this.p = 0;
        this.i = 1;
        this.j = input.length - 1;
        this.truePivot = 0;
        this.init = false;
        this.arr = input;
        this.partitions = [];
        this.trueIndex = [];
        this.partitions.push(this.arr);
        var x = [];
        for(var i = 0; i < this.arr.length; i++)
        {
            x[i] = i;
        }
        this.trueIndex.push(x);
    }

    swap()
    {
        var temp;
        if(this.i < this.j)
        {
            temp = this.partitions[0][this.i];
            //console.log("i:", this.i, "j:", this.j);
            this.partitions[0][this.i] = this.partitions[0][this.j];
            this.partitions[0][this.j] = temp;
            this.arr[this.trueIndex[0][this.i]] = this.partitions[0][this.i];
            this.arr[this.trueIndex[0][this.j]] = this.partitions[0][this.j];
        }
        else if(this.i > this.j || this.partitions[0][this.i] == this.partitions[0][this.j])
        {
            temp = this.partitions[0][this.j];
            this.partitions[0][this.j] = this.partitions[0][this.p];
            this.partitions[0][this.p] = temp;
            this.arr[this.trueIndex[0][this.j]] = this.partitions[0][this.j];
            this.arr[this.trueIndex[0][this.p]] = this.partitions[0][this.p];
            if(!this.init)
            {
                this.truePivot = this.j
                this.init = true;
                //console.log("truePivot: ", this.truePivot);
            }
        }
    }

    step()
    {
        if(this.partitions.length == 0)
        {
            return 0;
        }
        if(this.i > this.j)
        {
            this.swap();
            this.createPartition();
            this.partitions.shift();
            this.trueIndex.shift();
            //console.log("partitions[0]: ", this.partitions[0]);
            //console.log("trueIndex[0]: ", this.trueIndex[0]);
            if(this.partitions.length == 0 && this.trueIndex.length == 0)
            {
                return 0;
            }
            this.i = 1;
            this.j = this.partitions[0].length - 1;
            //console.log("partitions list: ", this.partitions);
            //console.log(this.partitions[0][this.j]);
            return 1;
        }

        if(this.partitions[0][this.i] >= this.partitions[0][this.p] && this.partitions[0][this.j] <= this.partitions[0][this.p])
        {
            this.swap();
            this.i++;
            this.j--;;
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
        //console.log("partitioning: ", this.partitions[0]);
        if(this.j > 0 && this.j < (this.partitions[0].length - 1))
        {
            var count = (this.j+1);
            var lowerPartition = [];
            var lowerIndex = [];
            for(var i = 0; i < this.j; i++)
            {
                lowerPartition[i] = this.partitions[0][i];
                lowerIndex[i] = this.trueIndex[0][i];
            }
            //console.log("lowerPartition: ", lowerPartition);
            //console.log("trueIndex: ", lowerIndex);
            if(lowerPartition.length > 1)
            {
                this.partitions.push(lowerPartition);
                this.trueIndex.push(lowerIndex);
            }
            var upperPartition = [];
            var upperIndex = [];
            for(var i = 0; i < (this.partitions[0].length-this.j-1); i++)
            {
                upperPartition[i] = this.partitions[0][count];
                upperIndex[i] = this.trueIndex[0][count];
                count++;
            }
            //console.log("upperPartition: ", upperPartition);
            //console.log("trueIndex: ", upperIndex);
            if(upperPartition.length > 1)
            {
                this.partitions.push(upperPartition);
                this.trueIndex.push(upperIndex);
            }
        }
        else
        {
            var partition = [];
            var partIndex = [];
            if(this.j == 0)
            {
                var count1 = (this.j+1);
                for(var i = 0; i < this.partitions[0].length-1; i++)
                {
                    partition[i] = this.partitions[0][count1];
                    partIndex[i] = this.trueIndex[0][count1];
                    count1++;
                }
            }
            else if(this.j == (this.partitions[0].length-1))
            {
                for(var i = 0; i < this.j; i++)
                {
                    partition[i] = this.partitions[0][i];
                    partIndex[i] = this.trueIndex[0][i];
                }
            }
            //console.log("partition: ", partition);
            //console.log("trueIndex: ", partIndex);
            if(partition.length > 1)
            {
                this.partitions.push(partition);
                this.trueIndex.push(partIndex);
            }
        }
    }
}