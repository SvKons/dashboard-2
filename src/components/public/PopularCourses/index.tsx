import './PopularCourses.scss';
import { ICourse, courses } from './utils';

const getTopSellingCourses = (courses: ICourse[], topN: number): ICourse[] => {
    return courses.sort((a, b) => b.sales - a.sales).slice(0, topN);
};

const PopularCourses = () => {
    const topCourses = getTopSellingCourses(courses, 5);

    return (
        <div className="popular-courses">
            <div className="popular-courses__wrap">
                <h2 className="popular-courses__title">Популярные курсы</h2>
                <ul className="popular-courses__list">
                    {topCourses.map((course, index) => (
                        <li className="popular-courses__item" key={index}>
                            {index + 1}. {course.title} - {course.sales} шт.
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PopularCourses;
