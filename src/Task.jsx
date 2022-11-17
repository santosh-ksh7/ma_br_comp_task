import "./Task.css"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';



export default function Task() {
  return (
    <div>
        <Topbar />
        <div className="parent">
            <div className="leftchild">
                <LeftCard />
            </div>
            <div className="rightchild">
                <RightCard />
            </div>
        </div>
    </div>
  )
}


function Topbar(){
    return(
        <div className="topbar">
            <h2 className="brand">clearhire</h2>
            <input type="text" className="search" placeholder="Employee Name or Company" />
            <select name="dropdown1" id="dropdown1">
                <option value="Designation">Designation</option>
                <option value="-------">-------</option>
                <option value="-------">-------</option>
            </select>
            <select name="dropdown2" id="dropdown2">
                <option value="Location">Location</option>
                <option value="-------">-------</option>
                <option value="-------">-------</option>
            </select>
            <button className="search_btn">Search</button>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuabej-KB_M2RIiJ2gOpR7c_KbHu8NBLqrmg&usqp=CAU" alt="img" className="profile" />
        </div>
    )
}

function LeftCard(){
    return(
        <div className="mainleft">
            <div className="leftcard">
                <div className="topflexbox">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuabej-KB_M2RIiJ2gOpR7c_KbHu8NBLqrmg&usqp=CAU" alt="profile" className="left_profilepic" />
                    <div className="tag">
                        <p>No. of Employees</p>
                        <h2>54</h2>
                    </div>
                </div>
                <h3 className="name">Gordan Ramsay</h3>
                <h4 className="about">CEO - The White Company</h4>
                <p className="website">www.thewhitecompany.com</p>
            </div>
            <div className="leftbottomcard">
                <div className="singlecard">
                    <PersonAddIcon sx={{color: "darkgreen"}} />
                    <p>Upload Employee</p>
                </div>
            </div>
        </div>
    )
}


function RightCard(){
    let arr = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuabej-KB_M2RIiJ2gOpR7c_KbHu8NBLqrmg&usqp=CAU",
            name: "Vamshi",
            designation: "Graphic Designer",
            tag: "Do it agency",
            total_exp: "06",
            curr_comp: "02",
            Salary: "5.4",
            star: "3"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuabej-KB_M2RIiJ2gOpR7c_KbHu8NBLqrmg&usqp=CAU",
            name: "Vamshi",
            designation: "Graphic Designer",
            tag: "Do it agency",
            total_exp: "06",
            curr_comp: "02",
            Salary: 5.4,
            star: 5
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuabej-KB_M2RIiJ2gOpR7c_KbHu8NBLqrmg&usqp=CAU",
            name: "Vamshi",
            designation: "Graphic Designer",
            tag: "Do it agency",
            total_exp: "06",
            curr_comp: "02",
            Salary: "5.4",
            star: "4"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuabej-KB_M2RIiJ2gOpR7c_KbHu8NBLqrmg&usqp=CAU",
            name: "Vamshi",
            designation: "Graphic Designer",
            tag: "Do it agency",
            total_exp: "06",
            curr_comp: "02",
            Salary: "5.4",
            star: "5"
        }
    ]

    return(
        <div>
            <h2>Find from the recommendations.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <div className="callindicard">
                {arr.map((ele, index) => <IndiCard obj={ele} key={index} /> )}
            </div>
            <p className="see_more">See more recommendations <ArrowRightAltIcon /></p>
        </div>
    )
}

function IndiCard({obj}){


    return(
        <div className="indi_card">
            <FavoriteIcon sx={{position: "absolute", right: "10px", top: "10px", color: "gray"}} />
            <div className="first_row_flex">
                <img src={obj.img} alt="pic" className="left_profilepic" />
                <div className="primary_info">
                    <h3 className="name">{obj.name}</h3>
                    <h3>{obj.designation}</h3>
                    <h3 className="gray_out">{obj.tag}</h3>
                </div>
            </div>
            <div className="second_row_flex">
                <div className="second_row_flex_child">
                    <p>Total Experience</p>
                    <h2><span>{obj.total_exp}</span> years</h2>
                </div>
                <div className="second_row_flex_child">
                    <p>Current company</p>
                    <h2><span>{obj.curr_comp}</span> years</h2>
                </div>
                <div className="second_row_flex_child">
                    <p>Salary</p>
                    <h2><span>{obj.Salary}</span> years</h2>
                </div>
            </div>
            <div className="third_row_flex">
                <Rating name="read-only" value={obj.star} readOnly sx={{color: "darkgreen"}} />
                <button className="btn">View</button>
            </div>
        </div>
    )
}